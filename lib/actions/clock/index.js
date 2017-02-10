import moment from 'moment';
import { Map } from 'immutable';
import { action } from '../utils';

const GET_TIME = 'GET_TIME';
const UPDATE_TIME = 'UPDATE_TIME';

export function getTime() {
    return action(GET_TIME, new Map({ time: moment().format('HH:mm:ss') }));
}

export function updateTime() {
    return action(UPDATE_TIME, new Map({ time: moment().format('HH:mm:ss') }));
}

export const TYPES = {
    GET_TIME,
    UPDATE_TIME,
};
