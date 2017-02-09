import { TYPES } from '../../actions/forecast';

export function forecast(state = {}, action) {
    switch (action.type) {
        case TYPES.GET_FORECAST_SUCCESS:
            return Object.assign({}, state, { forecast: action.forecast });
        case TYPES.GET_FORECAST_FAILURE:
            return Object.assign({}, state, { forecast: action.forecast });
    }

    return state;
}
