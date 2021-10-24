import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpenseSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={250}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={8} expensesTotal={250240}/>);
    expect(wrapper).toMatchSnapshot();
});