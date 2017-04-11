import { combineEpics } from 'redux-observable';

import { fetchForecastEpic } from './forecast';
import { fetchWeatherEpic } from './weather';
import { requestTimeEpic } from './clock';

export const epics = combineEpics(
    fetchForecastEpic,
    fetchWeatherEpic,
    requestTimeEpic
);
