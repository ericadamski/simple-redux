const GET_WEATHER = 'GET_WEATHER';
const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';
const GET_WEATHER_REQUESTED = 'GET_WEATHER_REQUESTED';
const URI = '//api.openweathermap.org/data/2.5/weather?id=6094817&APPID=5f76af14cd2b833834cab55b98ed7e41&units=metric';

import { call, put, takeEvery } from 'redux-saga/effects';
import 'isomorphic-fetch';

export function* fetchWeather() {

    try {
        let data = yield call(fetch, URI);

        if (data) {
            const d = yield data.json();

            data = {
                temp: Math.ceil(d.main.temp),
                condition: d.weather[0].description,
                icon: d.weather[0].icon,
            };
        }

        yield put({
            type: GET_WEATHER_SUCCESS,
            weather: { ...data || {} },
        });
    } catch (e) {
        yield put({
            type: GET_WEATHER_FAILURE,
            weather: {
                condition: e.message,
                icon: '',
                temp: '',
            }
        });
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
        await fetch('//api.openweathermap.org/data/2.5/weather?id=6094817&APPID=5f76af14cd2b833834cab55b98ed7e41&units=metric')
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: GET_WEATHER,
                    weather: {
                        temp: Math.ceil(response.main.temp),
                        condition: response.weather[0].description,
                        icon: response.weather[0].icon,
                    },
                });
            })
            .catch(() => {
                dispatch({
                    type: GET_WEATHER,
                    weather: 'There was an error fetching weather information.',
                });
            });
}

export const TYPES = {
    GET_WEATHER,
    GET_WEATHER_REQUESTED,
    GET_WEATHER_FAILURE,
    GET_WEATHER_SUCCESS,
};

export const CONSTANTS = { URI };
