import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// This is exported as an unconnected version only for testing
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');           // Redirect now to the dashboard
    };
    render() {
        return (
            <div>
              <div className='page-header'>
                <div className='content-container'>
                  <h1 className='page-header__title'>Add expense</h1>
                </div>
              </div>
              <div className='content-container'>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
              </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

// Use connect so we can add the new expense to the store. mapStateToProps is not used here so it is undefined
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
