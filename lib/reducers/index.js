import { combineReducers } from 'redux';

import { clock } from './clock';
import { weather } from './weather';
import { date } from './date';

const reducers = combineReducers({
    clock,
    weather,
    date,
});

export default reducers;
