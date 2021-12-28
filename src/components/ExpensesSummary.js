import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const total = numeral(expensesTotal).format('$0,0.00');
    return (
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>
            Viewing <span>{expensesCount}</span> {expenseWord} with a total of <span>{total}</span>
          </h1>
          <div className='page-header__actions'>
            <Link className='button' to='/create'>Add Expense</Link>
          </div>
        </div>
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
