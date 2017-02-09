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
            {
                type: actions.TYPES.GET_WEATHER,
                weather: {
                    temp: Math.ceil(data.main.temp),
                    condition: data.weather[0].description,
                    icon: data.weather[0].icon,
                },
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
