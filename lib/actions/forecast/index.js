const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
const GET_FORECAST_FAILURE = 'GET_FORECAST_FAILURE';
const GET_FORECAST_REQUESTED = 'GET_FORECAST_REQUESTED';

import { call, put, takeEvery } from 'redux-saga/effects';
import { Map, List } from 'immutable';
import 'isomorphic-fetch';

import { getURI, transformWeatherResponse, action } from '../utils';

export function* fetchForecast() {
    try {
        const response = yield call(fetch, getURI('forecast'));
        const data = response ? (yield response.json()).list : [];

        yield put(action(GET_FORECAST_SUCCESS, new Map({
            forecast: new List(data.map(transformWeatherResponse)
                .filter((day, index) => index % (24/3) === 0)
                .map(day => new Map(day)))
        })));
    } catch (e) {
        yield put(action(GET_FORECAST_FAILURE, new Map({ forecast: new List([ e.message ]) })));
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
