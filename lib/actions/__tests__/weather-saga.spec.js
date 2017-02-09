import { put, call } from 'redux-saga/effects';
import { expect } from 'chai';
import * as actions from '../weather';
import { getURI } from '../utils';

const URI = getURI('weather');

describe('weather', () => {
    it('should get the weather data', () => {
        // Arrange
        const expectedAction = {
            type: actions.TYPES.GET_WEATHER_SUCCESS,
            weather: {},
        };
        const gen = actions.fetchWeather();

        // Act

        // Assert
        expect(gen.next().value).to.deep.equal(call(fetch, URI));
        expect(gen.next().value).to.deep.equal(put(expectedAction));
        expect(gen.next()).to.deep.equal({ done: true, value: undefined });
    });

    it('should gracefully error', () => {
        // Arrange
        const error = { message: 'something bad happend :(' };
        const expectedAction = {
            type: actions.TYPES.GET_WEATHER_FAILURE,
            weather: {
                icon: '',
                condition: error.message,
                temp: '',
            }
        };
        const gen = actions.fetchWeather();

        // Act

        // Assert
        expect(gen.next().value).to.deep.equal(call(fetch, URI));
        expect(gen.throw(error).value).to.deep.equal(put(expectedAction));
        expect(gen.next()).to.deep.equal({ done: true, value: undefined });
    });
});
