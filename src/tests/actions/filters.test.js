import moment from 'moment';
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from '../../actions/filters';

// setTestFilter()
test('Should generate filter action object with provided filter', () => {
    const text = 'sample';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

// setTestFilter() with default value
test('Should generate filter action object with default filter', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

// sortByDate()
test('Should sort expenses according to date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

// sortByAmount()
test('Should sort expenses according to amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// setStartDate()
test('Should generate start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

// setEndDate()
test('Should generate end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});