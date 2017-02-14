import { call, put } from 'redux-saga/effects';
import { expect } from 'chai';
import { getURI, action } from '../utils';
import { Map, List } from 'immutable';

import * as actions from '../forecast';

const URI = getURI('forecast');

describe('forecast action creators', () => {
    it('should return the correctly formed action', () => {
        // Arrange
        const gen = actions.fetchForecast();
        const expectedAction =
            action(actions.TYPES.GET_FORECAST_SUCCESS, new Map({ forecast: new List() }));

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
        const expectedAction =
            action(actions.TYPES.GET_FORECAST_FAILURE, new Map({
                forecast: new List([error.message])
            }));

        // Act

        // Assert
        expect(gen.next().value).to.deep.equal(call(fetch, URI));
        expect(gen.throw(error).value).to.deep.equal(put(expectedAction));
        expect(gen.next().value).to.be.undefined;
    });
});
