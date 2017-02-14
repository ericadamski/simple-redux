import { put, call } from 'redux-saga/effects';
import { expect } from 'chai';
import * as actions from '../weather';
import { getURI, action } from '../utils';
import { Map } from 'immutable';

const URI = getURI('weather');

describe('weather', () => {
    it('should get the weather data', () => {
        // Arrange
        const expectedAction =
            action(actions.TYPES.GET_WEATHER_SUCCESS, new Map({}));
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
        const expectedAction = action(
            actions.TYPES.GET_WEATHER_FAILURE,
            new Map({ condition: error.message })
        );
        const gen = actions.fetchWeather();

        // Act

        // Assert
        expect(gen.next().value).to.deep.equal(call(fetch, URI));
        expect(gen.throw(error).value).to.deep.equal(put(expectedAction));
        expect(gen.next()).to.deep.equal({ done: true, value: undefined });
    });
});
