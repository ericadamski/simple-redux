export function getURI(request) {
    const APPID = '&APPID=5f76af14cd2b833834cab55b98ed7e41';
    const UNITS = '&units=metric';
    const CITY = '?id=6094817';
    const URI = '//api.openweathermap.org/data/2.5/';

    return `${URI}${request}${CITY}${APPID}${UNITS}`;
}

export function transformWeatherResponse(data) {
    if (Object.keys(data).length < 1) return data;

    return {
        temp: Math.ceil(data.main.temp),
        condition: data.weather[0].description,
        icon: data.weather[0].icon,
    };
}

export function action(type, data) {
    return {
        type,
        data,
    };
}
