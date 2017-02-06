import moment from 'moment';

const GET_TIME = 'GET_TIME';
const UPDATE_TIME = 'UPDATE_TIME';

export function getTime() {
    return {
        type: GET_TIME,
        time: moment().format('HH:mm:ss'),
    };
}

export function updateTime() {
    return {
        type: UPDATE_TIME,
        time: moment().format('HH:mm:ss'),
    };
}
