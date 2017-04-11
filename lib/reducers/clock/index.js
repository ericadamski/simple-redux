import { Map } from 'immutable';
import { TYPES } from '../../actions/clock';
import { data } from '../utils';

export function clock(state = new Map(), action) {
    if (action.type === TYPES.GET_TIME_SUCCESS)
        return state.merge(data(action));

    return state;
}
