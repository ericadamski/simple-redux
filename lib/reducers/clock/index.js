export function clock(state = {}, action) {
    switch (action.type) {
        case 'GET_TIME':
            return Object.assign({}, { time: action.time });
        case 'UPDATE_TIME':
            return Object.assign({}, { time: action.time });
    }

    return state;
}
