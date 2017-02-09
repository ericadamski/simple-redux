import { TYPES } from '../../actions/date';

export function date(state = {}, action) {
    switch (action.type) {
        case TYPES.GET_DATE:
            return Object.assign({}, state, { date: action.date });
    }

    return state;
}
