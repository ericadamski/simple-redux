import moment from 'moment';
import { Map } from 'immutable';
import { action } from '../utils';

const GET_DATE = 'GET_DATE';
const DATE_FORMAT = 'ddd, Do of MMMM';

export function getTodaysDate() {
    return dispatch => dispatch(action(GET_DATE, new Map({ date: moment().format(DATE_FORMAT) })));
}

export const TYPES = { GET_DATE };
export const CONSTANTS = { DATE_FORMAT };
