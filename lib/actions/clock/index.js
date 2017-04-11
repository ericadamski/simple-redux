import moment from 'moment';
import { Map } from 'immutable';
import { action } from '../utils';
import 'rxjs';

const GET_TIME = 'GET_TIME';
const UPDATE_TIME = 'UPDATE_TIME';
const GET_TIME_SUCCESS = 'GET_TIME_SUCCESS';

export function getTime() {
    return { type: GET_TIME };
}

export function updateTime() {
    return { type: UPDATE_TIME };
}

export function requestTimeEpic(action$) {
    return action$.ofType(GET_TIME, UPDATE_TIME)
        .map(() => action(GET_TIME_SUCCESS, new Map({ time: moment().format('HH:mm:ss') })));
}

export const TYPES = {
    GET_TIME,
    UPDATE_TIME,
    GET_TIME_SUCCESS,
};
