
const GET_FORCAST_SUCCESS = 'GET_FORCAST_SUCCESS';
const GET_FORCAST_FAILURE = 'GET_FORCAST_FAILURE';
const GET_FORCAST_REQUESTED = 'GET_FORCAST_REQUESTED';

import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import 'isomorphic-fetch';

import { getURI, transformWeatherResponse } from '../utils';

export function* fetchForcast() {
    try {
        const response = yield call(fetch, getURI('forcast'));
        console.log(yield response.json());
        const data = response ? (yield response.json()).list : [];

        yield put({
            type: GET_FORCAST_SUCCESS,
            forcast: data.map(transformWeatherResponse),
        });
    } catch (e) {
        yield put({
            type: GET_FORCAST_FAILURE,
            forcast: [ e.message ],
        });

        yield call(delay, 2000);
    }
}

export function* watchForcast() {
    yield takeEvery(GET_FORCAST_REQUESTED, fetchForcast);
}

export function requestForcast() {
    return dispatch => dispatch({ type: GET_FORCAST_REQUESTED });
}

export const TYPES = {
    GET_FORCAST_SUCCESS,
    GET_FORCAST_FAILURE,
    GET_FORCAST_REQUESTED,
};
