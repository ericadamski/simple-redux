import { List } from 'immutable';
import { TYPES } from '../../actions/forecast';
import { data } from '../utils';

export function forecast(state = new List(), action) {
    if (action.type === TYPES.GET_FORECAST_SUCCESS || action.type === TYPES.GET_FORECAST_FAILURE)
        return state.merge(data(action).get('forecast'));

    return state;
}
