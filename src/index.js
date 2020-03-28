import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
// Provider --> allows components to use connet, and subscribe to the store
import {Provider} from 'react-redux';
// global styles
import 'tachyons';

//state
import configureStore from './state/store';
const reduxStore = configureStore();

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
