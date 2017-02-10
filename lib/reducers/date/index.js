import { Map } from 'immutable';
import { TYPES } from '../../actions/date';

export function date(state = new Map(), action) {
    switch (action.type) {
        case TYPES.GET_DATE:
            return state.set('date', action.date);
    }

    return state;
}
