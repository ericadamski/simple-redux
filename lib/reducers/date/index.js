import { Map } from 'immutable';
import { TYPES } from '../../actions/date';
import { data } from '../utils';

export function date(state = new Map(), action) {
    switch (action.type) {
        case TYPES.GET_DATE:
            return state.merge(data(action));
    }

    return state;
}
