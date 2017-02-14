import FetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as actions from '../weather';
import { getURI, action } from '../utils';
import { Map, fromJS } from 'immutable';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const URI = getURI('weather');

describe('weather', () => {
    it('should get the weather data', async () => {
        // Arrange
        const data = {
            "coord": {
                "lon": -75.7,
                "lat": 45.41,
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": -14.57,
                "pressure": 1006.15,
                "humidity": 65,
                "temp_min": -14.57,
                "temp_max": -14.57,
                "sea_level": 1028.53,
                "grnd_level": 1006.15
            },
            "wind": {
                "speed": 1.51,
                "deg": 12.5014
            },
            "clouds": { "all": 48 },
            "dt":1486647626,
            "sys": {
                "message": 0.0141,
                "country": "CA",
                "sunrise": 1486642322,
                "sunset": 1486678958
            },
            "id": 6094817,
            "name": "Ottawa",
            "cod":200
        };

        const expectedActions = [
            action(
                actions.TYPES.GET_WEATHER,
                fromJS({ ...data })
            )
        ];
        const store = mockStore({});

        FetchMock.getOnce(URI, { body: data });

        // Act
        await store.dispatch(actions.getWeather());

        // Assert
        expect(store.getActions()).to.deep.equal(expectedActions);
    });

    it('should gracefully error', async () => {
        // Arrange
        const expectedActions = [
            action(actions.TYPES.GET_WEATHER,
                fromJS({ weather: 'There was an error fetching weather information.' }))
        ];
        const store = mockStore({});
        FetchMock.getOnce(URI, { status: 404 });

        // Act
        await store.dispatch(actions.getWeather());

        // Assert
        expect(store.getActions()).to.deep.equal(expectedActions);
    });
});
