import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// This is exported as an unconnected version only for testing
export const ExpenseList = (props) => (
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-for-mobile'>Expenses</div>
      <div className='show-for-desktop'>Expense</div>
      <div className='show-for-desktop'>Amount</div>
    </div>
    <div className='list-body'>
      {
        props.expenses.length === 0
          ? (
            <div className='list-item list-item--message'>
              <span>No expenses</span>
            </div>
          ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />
            })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
}

// We need to call the connect() function with the component ExpenseList to get state from the store
export default connect(mapStateToProps)(ExpenseList);
