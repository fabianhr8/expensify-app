import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Default filter variables
test('Should setup default filter variables', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

// Sort by amount
test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

// Sort by date
test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// Set text filter
test('Should set a text filter', () => {
    const text = 'sampleFilter';
    const action = {
        type: 'SET_TEXT_FILTER', 
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toEqual('sampleFilter');
});

// Set startDate filter
test('Should set a startDate filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE', 
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

// Set endDate filter
test('Should set an endDate filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE', 
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});