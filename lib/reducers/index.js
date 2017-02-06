import { combineReducers } from 'redux';

import { clock } from './clock';

const reducers = combineReducers({ clock: clock });

export default reducers;
