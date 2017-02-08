import { TYPES } from '../../actions/weather';

export function weather(state = {}, action) {
    switch (action.type) {
        case TYPES.GET_WEATHER:
            return Object.assign({}, state, { weather: action.weather });
    }

    return state;
}
