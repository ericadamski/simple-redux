import { Map } from 'immutable';
import { TYPES } from '../../actions/clock';

export function clock(state = new Map(), action) {
    if (action.type === TYPES.GET_TIME || action.type === TYPES.UPDATE_TIME)
        return state.set('time', action.time);

    return state;
}
