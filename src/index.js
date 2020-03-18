import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// standard setup for react+redux
// Provider --> allows components to use connet, and subscribe to the store
import {Provider} from 'react-redux';
// from redux, import createStore, applyMiddleware, combineReducers
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import thunk middleware for anything async
import ThunkMiddleware from 'redux-thunk';
// other middleware, e.g. the logger
import {createLogger} from 'redux-logger';

// global styles
import 'tachyons';

//ducks 

// middleware: logger
const logger = createLogger({
    level: 'log',
    collapsed: true
});







ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
