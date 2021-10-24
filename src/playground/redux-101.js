import { createStore } from 'redux';

// Action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducer
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

// This is run every time the store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// ACTIONS - an object that gets sent to the store

// Increment count
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// Decrement count
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());

// set a number
store.dispatch(setCount({ count: 101 }));

// Reset count
store.dispatch(resetCount());

// When this is run, the subscribe method stops
unsubscribe();