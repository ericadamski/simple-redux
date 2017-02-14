import { createSelector } from 'reselect';
import { List, Map } from 'immutable';

export function getForecast(...days) {
    let list = new List();

    days.forEach(day => {
        list = (day && day.size > 0) ? list.push(new Map({
            temp: Math.ceil(day.get('main').get('temp')),
            condition: day.get('weather').first()
                .get('description'),
            icon: day.get('weather').first()
                .get('icon'),
        })) : list.push(new Map());
    });

    return list;
}

export const forecastSelector = createSelector(
    [
        state => state.forecast.get(0),
        state => state.forecast.get(7),
        state => state.forecast.get(15),
        state => state.forecast.get(23),
        state => state.forecast.get(31),
    ],
    getForecast
);

export const weatherSelector =
    createSelector(state => state.weather, day => getForecast(day).first());
