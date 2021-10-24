import React from "react";
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const total = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
            <h2>Viewing {expensesCount} {expenseWord} with a total of {total}</h2>
        </div>
    )

}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
}

// We need to call the connect() function with the component ExpenseList to get state from the store
export default connect(mapStateToProps)(ExpensesSummary);