import { TYPES } from '../../actions/weather';

export function weather(state = {}, action) {
    switch (action.type) {
        case TYPES.GET_WEATHER:
            return Object.assign({}, state, { ...action.weather });
        case TYPES.GET_WEATHER_SUCCESS:
            return Object.assign({}, state, { ...action.weather });
        case TYPES.GET_WEATHER_FAILURE:
            return Object.assign({}, state, { ...action.weather });
    }

    return state;
}
