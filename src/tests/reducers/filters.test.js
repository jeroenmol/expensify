import filtersReducers from '../../reducers/filters';
import { setTextFilter } from '../../actions/filters'
import moment from 'moment';
import uuid from 'uuid';

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
      });
});

test('should set sortBy to amount', () => {
    const state = filtersReducers(undefined, {
        type: 'SORT_BY_AMOUNT'
    });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = filtersReducers(undefined, {
        type: 'SORT_BY_DATE'
    });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = uuid();
    const state = filtersReducers(undefined, {
        type: 'SET_TEXT_FILTER',
        text
    });
    expect(state.text).toBe(text);
});

test('should set start date filter', () => {
    const startDate = moment(0).subtract(7, 'days');
    const state = filtersReducers(undefined, {
        type: 'SET_START_DATE',
        startDate
    });
    expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
    const endDate = moment(0).add(7, 'days');
    const state = filtersReducers(undefined, {
        type: 'SET_END_DATE',
        endDate
    });
    expect(state.endDate).toBe(endDate);
});

// case 'SET_TEXT_FILTER':
//       return {
//         ...state,
//         text: action.text
//       };
//     case 'SORT_BY_AMOUNT':
//       return {
//         ...state,
//         sortBy: 'amount'
//       };
//     case 'SORT_BY_DATE':
//       return {
//         ...state,
//         sortBy: 'date'
//       };
//     case 'SET_START_DATE':
//       return {
//         ...state,
//         startDate: action.startDate
//       };
//     case 'SET_END_DATE':
