import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, removeExpense, startRemoveExpense } from '../actions/expenses';

// This is exported as an unconnected version only for testing
export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');                    // Redirect to the dashboard
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');                    // Redirect to the dashboard
    };
    render() {
        return (
            <div>
              <div className='page-header'>
                <div className='content-container'>
                  <h1 className='page-header__title'>Edit expense</h1>
                </div>
              </div>
              <div className='content-container'>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button className='button__delete' onClick={this.onRemove}>Remove Expense</button>
              </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

// Call the connect() function to find the specific expense to be edited
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
