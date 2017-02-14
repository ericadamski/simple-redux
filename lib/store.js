import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import sagas from './actions/sagas';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const saga = createSagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(),
    applyMiddleware(thunk, saga),
    window.devToolsExtension && window.devToolsExtension()
);

saga.run(sagas);

export default store;
