import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './lib/store';
import Main from './lib/main.jsx';

render((
    <Provider store={store}>
        <Main />
    </Provider>
), document.getElementById('app'));
