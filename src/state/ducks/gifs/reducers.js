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
const initialStateChangeSearchField = {
    changeSearchField: ''
}

const changeSearchFieldReducer = (state = initialStateChangeSearchField, action = {}) => {
    switch(action.type){
        case types.CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {changeSearchField: action.payload});
        default: return state;
    }
}

const reducer = combineReducers({
    changeSearchFieldReducer: changeSearchFieldReducer
})

export default reducer;