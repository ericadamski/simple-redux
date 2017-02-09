import { combineReducers } from 'redux';

import { clock } from './clock';
import { weather } from './weather';
import { date } from './date';
import { forecast } from './forecast';

const reducers = combineReducers({
    clock,
    weather,
    date,
    forecast,
});

export default reducers;
