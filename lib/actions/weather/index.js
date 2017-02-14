const GET_WEATHER = 'GET_WEATHER';
const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';
const GET_WEATHER_REQUESTED = 'GET_WEATHER_REQUESTED';

import { call, put, takeEvery } from 'redux-saga/effects';
import { Map } from 'immutable';
import 'isomorphic-fetch';
import { getURI, transformWeatherResponse, action } from '../utils';

export function* fetchWeather() {
    try {
        const response = yield call(fetch, getURI('weather'));
        const data = response ? yield response.json() : {};

        yield put(
            action(GET_WEATHER_SUCCESS, new Map({ ...transformWeatherResponse(data) }))
        );
    } catch (e) {
        yield put(action(GET_WEATHER_FAILURE, new Map({
            condition: e.message,
            icon: '',
            temp: '',
        })));
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
            .then(response => {
                dispatch(action(GET_WEATHER, new Map({
                    temp: Math.ceil(response.main.temp),
                    condition: response.weather[0].description,
                    icon: response.weather[0].icon,
                })));
            })
            .catch(() => {
                dispatch(action(
                        GET_WEATHER,
                        new Map({ weather: 'There was an error fetching weather information.' })
                    ));
            });
}

export const TYPES = {
    GET_WEATHER,
    GET_WEATHER_REQUESTED,
    GET_WEATHER_FAILURE,
    GET_WEATHER_SUCCESS,
};
