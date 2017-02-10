import { Map } from 'immutable';
import { TYPES } from '../../actions/forecast';

export function forecast(state = new Map(), action) {
    if (action.type === TYPES.GET_FORECAST_SUCCESS || action.type === TYPES.GET_FORECAST_FAILURE)
        return state.set('forecast', action.forecast);

    return state;
}
