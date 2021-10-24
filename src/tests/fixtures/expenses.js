import moment from 'moment';

export default [{
    id: '001',
    description: 'gum',
    amount: 200,
    note: '',
    createdAt: 0
}, {
    id: '002',
    description: 'chocolate',
    amount: 250,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '003',
    description: 'beer',
    amount: 600,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}];