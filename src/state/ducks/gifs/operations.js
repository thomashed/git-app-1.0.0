// 1 operation == X actions, e.g. an async request with thunk would be at least 3 actions
// this is the interface for our actions, and the interface for our duck
// a thunk will dispatch here, while an operation with only 1 action, will link to that action
import * as actions from './actions';

const changeSearchField = actions.changeSearchField;

// sendRequestGif --> async, so its a thunk, we therefore use return function 
const sendRequestGif = (searchString) => (dispatch) => {
    dispatch(actions.sendRequestGifPending());

    fetch('https://api.giphy.com/v1/gifs/search?api_key=Hd1fR0FW1u2HXkBFYL1jVNXIub1V081Y&q=ryan gosling&limit=5&offset=0&rating=G&lang=en')
    .then(response => response.json())
    .then(data => {
        dispatch(actions.sendRequestGifSuccess(data));
    })
    .catch(error => {
        dispatch(actions.sendRequestGifFailed());
    });
}
 
const clearGifsList = actions.clearGifsList;

const gifClicked = (dispatch, elementId, gifUrl) => {
    var input = document.createElement('input');
    input.type = 'text';
    input.id = elementId;
    input.value = gifUrl;
    document.body.appendChild(input);
    input.select()
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(input);
}

export {
    changeSearchField,
    sendRequestGif,
    clearGifsList,
    gifClicked
}











