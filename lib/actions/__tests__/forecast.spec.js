import { call, put } from 'redux-saga/effects';
import { expect } from 'chai';
import { getURI, action } from '../utils';
import { Map, List } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

const epicMiddleware = createEpicMiddleware(actions.fetchForecastEpic);
const mockStore = configureMockStore([ epicMiddleware ]);

import * as actions from '../forecast';

const URI = getURI('forecast');

describe('forecast saga action creators', () => {
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

describe('forecast rx action creators', () => {
    let store;

    beforeEach(() => store = mockStore());

    afterEach(() => {
        nock.cleanAll();
        epicMiddleware.replaceEpic(actions.fetchForecastEpic);
    });

    fit('should return the correctly formed action', async () => {
        // Arrange
        const data = { body: { list: [] } };

        nock('//api.openweathermap.org')
            .get('/data/2.5/forecast')
            .reply(200, data);

        // Act
        store.dispatch(actions.requestForecast());

        // Assert
        const storeActions = store.getActions();

        expect(storeActions).to.have.lengthOf(2);
        expect(storeActions[1]).to.have.all.keys(['type', 'data']);
        expect(storeActions[1].type).to.equal(actions.TYPES.GET_FORECAST_SUCCESS);
        expect(storeActions[1].data).to.be.instanceof(Map)
        expect(storeActions[1].data.get('forecast')).to.be.an.instanceof(List);
    });

    it('should fail gracefully', () => {
        // Arrange

        // Act

        // Assert
    });
});
