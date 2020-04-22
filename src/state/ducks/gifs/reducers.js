// reducers are the only thing that updates our store(state of the app)
// it's good practice to keep the state shape above the 
import {combineReducers} from 'redux';
import * as types from './types';

/* state shape, i.e. the props in our store and their types
{
    searchField: string
}
*/

// TODO: is the below the best way to assign initial value of the store prop?
const initialStateSearchField = {
    searchField: '42'
}

const changeSearchFieldReducer = (state = initialStateSearchField, action = {}) => {
    switch(action.type){
        case types.CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        case types.CLEAR_GIFS_LIST:
            return Object.assign({}, state, {searchField: ''}); 
        default: return state;
    }
}

const initialStateRequestGifReducer = {
    isPending: false,
    gifs: [],
    error: false
}

const requestGifReducer = (state = initialStateRequestGifReducer, action = {}) => {
    switch(action.type){
        case types.REQUEST_GIF_PENDING:           
            return Object.assign({}, state, {isPending: true});
        case types.REQUEST_GIF_SUCCESS:           
            return Object.assign({}, state, {isPending: false, gifs: action.payload.data});
        case types.REQUEST_GIF_FAILED:           
            return Object.assign({}, state, {isPending: false});
        case types.CLEAR_GIFS_LIST:
            return Object.assign({}, state, {gifs: action.payload});
        default:
            return state;
    }
}

const initialStateCopyGifReducer = {
    currentCopiedGifUrl: '',
    error: false
}

const copyGifReducer = (state = initialStateCopyGifReducer, action = {}) => {
    switch(action.type){
        case types.COPY_GIF_SUCCESS:
            return Object.assign({}, state, {currentCopiedGifUrl: action.payload});
        case types.COPY_GIF_FAILED:
            return Object.assign({}, state, {currentCopiedGifUrl: '', error: true});
        default:
            return state;
    }
}


const reducer = combineReducers({
    changeSearchFieldReducer: changeSearchFieldReducer,
    requestGifReducer: requestGifReducer,
    copyGifReducer: copyGifReducer
})

export default reducer;