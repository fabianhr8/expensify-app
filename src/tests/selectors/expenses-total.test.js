import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 when no expenses given', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('Should correctly add 1 expense is given', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(200);
});

test('Should correctly add multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(1050);
});