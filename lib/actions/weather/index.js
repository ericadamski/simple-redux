const GET_WEATHER = 'GET_WEATHER';
import 'isomorphic-fetch';

export function getWeather() {
    return async dispatch =>
        await fetch('//api.openweathermap.org/data/2.5/weather?id=6094817&APPID=5f76af14cd2b833834cab55b98ed7e41&units=metric')
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: GET_WEATHER,
                    weather: response,
                });
            })
            .catch(() => {
                dispatch({
                    type: GET_WEATHER,
                    weather: 'There was an error fetching weather information.',
                });
            });
}

export const TYPES = { GET_WEATHER };
