import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// This is exported as an unconnected version only for testing
export const ExpenseList = (props) => {

    return (
        <div>
            {
                props.expenses.length === 0 ? (
                    <p>There are no expenses</p>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
            }
        </div>
    )};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
}

// We need to call the connect() function with the component ExpenseList to get state from the store
export default connect(mapStateToProps)(ExpenseList);