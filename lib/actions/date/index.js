import moment from 'moment';

const GET_DATE = 'GET_DATE';
const DATE_FORMAT = 'ddd, Do of MMMM';

export function getTodaysDate() {
    return dispatch => dispatch({
        type: GET_DATE,
        date: moment().format(DATE_FORMAT),
    });
}

export const TYPES = { GET_DATE };
export const CONSTANTS = { DATE_FORMAT };
