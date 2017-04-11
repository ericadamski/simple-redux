const GET_WEATHER = 'GET_WEATHER';
const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';
const GET_WEATHER_REQUESTED = 'GET_WEATHER_REQUESTED';

import { call, put, takeEvery } from 'redux-saga/effects';
import { fromJS, Map } from 'immutable';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'isomorphic-fetch';
import { getURI, action } from '../utils';

export function* fetchWeather() {
    try {
        const response = yield call(fetch, getURI('weather'));
        const data = response ? yield response.json() : {};

        yield put(
            action(GET_WEATHER_SUCCESS, fromJS({ ...data }))
        );
    } catch (e) {
        yield put(action(GET_WEATHER_FAILURE, new Map({ condition: e.message })));
    }
}

export function* watchWeather() {
    yield takeEvery(GET_WEATHER_REQUESTED, fetchWeather);
}

export function requestWeather() {
    return dispatch => dispatch({ type: GET_WEATHER_REQUESTED });
}

export function getWeather() {
    return async dispatch =>
        await fetch(getURI('weather'))
            .then(response => response.json())
            .then(response => dispatch(action(GET_WEATHER, fromJS({ ...response }))))
            .catch(() => {
                dispatch(action(
                        GET_WEATHER,
                        new Map({ weather: 'There was an error fetching weather information.' })
                    ));
            });
}

export function fetchWeatherEpic(action$) {
    return action$.ofType(GET_WEATHER_REQUESTED)
        .mergeMap(() => {
            return ajax({
                crossDomain: true,
                method: 'GET',
                url: getURI('weather'),
            }).map(({ response }) =>
                action(GET_WEATHER_SUCCESS, fromJS(...response)))
                .catch(() => Observable.of(action(
                        GET_WEATHER,
                        new Map({ weather: 'There was an error fetching weather information.' })
                    )));
        });
}

export const TYPES = {
    GET_WEATHER,
    GET_WEATHER_REQUESTED,
    GET_WEATHER_FAILURE,
    GET_WEATHER_SUCCESS,
};
