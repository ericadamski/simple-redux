
const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
const GET_FORECAST_FAILURE = 'GET_FORECAST_FAILURE';
const GET_FORECAST_REQUESTED = 'GET_FORECAST_REQUESTED';

import { call, put, takeEvery } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import 'isomorphic-fetch';

import { getURI, transformWeatherResponse } from '../utils';

export function* fetchForecast() {
    try {
        const response = yield call(fetch, getURI('forecast'));
        const data = response ? (yield response.json()).list : [];

        yield put({
            type: GET_FORECAST_SUCCESS,
            forecast: data.map(transformWeatherResponse)
                .filter((day, index) => index % (24/3) === 0),
        });
    } catch (e) {
        yield put({
            type: GET_FORECAST_FAILURE,
            forecast: [ e.message ],
        });
    }
}

export function* watchForecast() {
    yield takeEvery(GET_FORECAST_REQUESTED, fetchForecast);
}

export function requestForecast() {
    return dispatch => dispatch({ type: GET_FORECAST_REQUESTED });
}

export const TYPES = {
    GET_FORECAST_SUCCESS,
    GET_FORECAST_FAILURE,
    GET_FORECAST_REQUESTED,
};
