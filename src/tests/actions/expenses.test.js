import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'sampleuid123';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done()).catch((e) => {
    throw new Error(e);
  });;
});

// removeExpense()
test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
  }).catch((e) => {
    throw new Error(e);
  });
});

// editExpense()
test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'new description' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'new description'
        }
    });
});

test('Should edit expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = { amount: 21045 };
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  }).catch((e) => {
    throw new Error(e);
  });
});

// addExpense()
test('Should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[2]
        }
    });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Keyboard',
    amount: 35,
    note: 'This is a new keyboard',
    createdAt: 10229492
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  }).catch((e) => {
    throw new Error(e);
  });
});

test('Should add expense with defaults to database and store', () => {
  const store = createMockStore(defaultAuthState);

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(actions[0].expense);
    done();
  }).catch((e) => {
    throw new Error(e);
  });
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  }).catch((e) => {
    throw new Error(e);
  });
});
