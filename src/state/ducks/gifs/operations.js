// 1 operation == X actions, e.g. an async request with thunk would be at least 3 actions
// this is the interface for our actions, and the interface for our duck
// a thunk will dispatch here, while an operation with only 1 action, will link to that action
import * as actions from './actions';

const changeSearchField = actions.changeSearchField;

// sendRequestGif --> async, so its a thunk, we therefore use return fucntion 
const sendRequestGif = (searchString) => (dispatch) => {
    dispatch(actions.sendRequestGifPending());
} 

export {
    changeSearchField,
    sendRequestGif
}











