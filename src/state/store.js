import {createStore, applyMiddleware, combineReducers} from 'redux';
import * as reducers from './ducks'; // import all reducers from ducks/index.js
import ThunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger = createLogger({
    level: 'log',
    collapsed: true
});

export default function configureStore(initialState = {}){
    const rootReducer = combineReducers(reducers);
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(ThunkMiddleware, logger)
    );
}






