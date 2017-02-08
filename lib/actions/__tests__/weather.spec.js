import FetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { expect } from 'chai';
import * as actions from '../weather';

const uri = '//api.openweathermap.org/data/2.5/weather?id=6094817&APPID=5f76af14cd2b833834cab55b98ed7e41&units=metric';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('weather', () => {
    it('should get the weather data', async () => {
        // Arrange
        const data = { temp: 1 };
        const expectedActions = [
            {
                type: actions.TYPES.GET_WEATHER,
                weather: data,
            }
        ];
        const store = mockStore({});

        FetchMock.getOnce(uri, { body: data });

        // Act
        await store.dispatch(actions.getWeather());

        // Assert
        expect(store.getActions()).to.deep.equal(expectedActions);
    });

    it('should gracefully error', async () => {
        // Arrange
        const expectedActions = [
            {
                type: actions.TYPES.GET_WEATHER,
                weather: 'There was an error fetching weather information.',
            }
        ];
        const store = mockStore({});
        FetchMock.getOnce(uri, { status: 404 });

        // Act
        await store.dispatch(actions.getWeather());

        // Assert
        expect(store.getActions()).to.deep.equal(expectedActions);
    });
});
