import * as React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux'
import store from './app/store'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'campusmap/public/styles/global.css';
import App from './app';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
