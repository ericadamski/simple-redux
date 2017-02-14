export function getURI(request) {
    const APPID = '&APPID=5f76af14cd2b833834cab55b98ed7e41';
    const UNITS = '&units=metric';
    const CITY = '?id=6094817';
    const URI = 'http://api.openweathermap.org/data/2.5/';

    return `${URI}${request}${CITY}${APPID}${UNITS}`;
}

export function action(type, data) {
    return {
        type,
        data,
    };
}
