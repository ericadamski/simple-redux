import { call, put } from 'redux-saga/effects';
import { expect } from 'chai';
import { getURI } from '../utils';

import * as actions from '../forecast';

const URI = getURI('forecast');

describe('forecast action creators', () => {
    it('should return the correctly formed action', () => {
        // Arrange
        const gen = actions.fetchForecast();
        const expectedAction = {
            type: actions.TYPES.GET_FORECAST_SUCCESS,
            forecast: [],
        };

        // Act

        // Assert
        expect(gen.next().value).to.deep.equal(call(fetch, URI));
        expect(gen.next().value).to.deep.equal(put(expectedAction));
        expect(gen.next().value).to.be.undefined;
    });

    it('should fail gracefully', () => {
        // Arrange
        const error = { message: 'something went wrong :(' };
        const gen = actions.fetchForecast();
        const expectedAction = {
            type: actions.TYPES.GET_FORECAST_FAILURE,
            forecast: [error.message],
        };

        // Act

        // Assert
        expect(gen.next().value).to.deep.equal(call(fetch, URI));
        expect(gen.throw(error).value).to.deep.equal(put(expectedAction));
        expect(gen.next().value).to.be.undefined;
    });
});
