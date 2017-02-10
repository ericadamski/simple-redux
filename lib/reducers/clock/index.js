import { Map } from 'immutable';
import { TYPES } from '../../actions/clock';
import { data } from '../utils';

export function clock(state = new Map(), action) {
    if (action.type === TYPES.GET_TIME || action.type === TYPES.UPDATE_TIME)
        return state.merge(data(action));

    return state;
}
