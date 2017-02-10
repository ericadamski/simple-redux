import { Map } from 'immutable';
import { TYPES } from '../../actions/weather';

export function weather(state = new Map(), action) {
    if (action.type === TYPES.GET_WEATHER ||
        action.type === TYPES.GET_WEATHER_SUCCESS ||
        action.type === TYPES.GET_WEATHER_FAILURE)
        return state.merge(action.weather);

    return state;
}
