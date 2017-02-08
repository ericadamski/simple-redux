import { combineReducers } from 'redux';

import { clock } from './clock';
import { weather } from './weather';

const reducers = combineReducers({
    clock,
    weather,
});

export default reducers;
