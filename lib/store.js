import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import sagas from './actions/sagas';
import { epics } from './actions/epics';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const saga = createSagaMiddleware();
const epic = createEpicMiddleware(epics);

const store = createStore(
    reducers,
    composeWithDevTools(),
    applyMiddleware(thunk, saga, epic),
    window.devToolsExtension && window.devToolsExtension()
);

saga.run(sagas);

export default store;
