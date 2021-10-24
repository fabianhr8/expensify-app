import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn(); 
    sortByDate = jest.fn();
    sortByAmount  = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter} 
            sortByDate={sortByDate}
            sortByAmount ={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change on ExpenseListFilters', () => {
    wrapper.find('input').simulate('change', {
        target: { value: altFilters.text }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test('Should sort by date on ExpenseListFilters', () => {
    // First, set sort to amount, so when we move back to date we notice the change
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount on ExpenseListFilters', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle data changes on ExpenseListFilters', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({ 
        startDate: altFilters.startDate,  
        endDate: altFilters.endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('Should handle data focus changes on ExpenseListFilters', () => {
    // This is not only true or false, it is null, 'startDate' or 'endDate'
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});