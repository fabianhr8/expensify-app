import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Default expenses variables
test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

// Remove expense by ID
test('Should remove an expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

// ID does not match, so no expense is removed
test('Should not remove an expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '11111'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// Add an expense
test('Should add a new expense', () => {
    const expense = {
        id: '004',
        description: 'cereal',
        amount: 500,
        note: '',
        createdAt: 10000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

// Edit an expense
test('Should edit an expense', () => {
    const description = 'bubblegum';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('bubblegum');
});

// ID does not match, so no expense is edited
test('Should edit an expense', () => {
    const description = 'bubblegum';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const newExpense = [
    {
      id: '004',
      description: 'soda',
      amount: 300,
      note: '',
      createdAt: 0
    }
  ];
  const action = {
    type: 'SET_EXPENSES',
    expenses: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(newExpense);
});
