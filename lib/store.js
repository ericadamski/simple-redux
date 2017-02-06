import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    composeWithDevTools(),
    applyMiddleware(),
    window.devToolsExtension && window.devToolsExtension()
);

export default store;
