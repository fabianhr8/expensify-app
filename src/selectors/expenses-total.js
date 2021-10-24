export default (expenses) => {
    return expenses
    .map(expense => expense.amount)                     // get an array of only the amounts
    .reduce((sum, value) => sum + value, 0)                // Sum the amounts array
};