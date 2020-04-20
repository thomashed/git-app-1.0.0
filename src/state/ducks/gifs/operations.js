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
    console.log('------------> Operations: gifClicked called')
    console.log('------------> Operations: is dispatch? --> ' + typeof(dispatch))
    console.log('------------> Operations: is elementId? --> ' + typeof(elementId))
    console.log('------------> Operations: is gifUrl? --> ' + typeof(gifUrl))
    console.log('------------> Operations: is elementId? --> ' + elementId)
    console.log('------------> Operations: is gifUrl? --> ' + gifUrl)

    var copyText = document.getElementById("justAtedewest");
    console.log('------------> Operations: is copyText? --> ' + typeof(copyText))
    copyText.select();



}

export {
    changeSearchField,
    sendRequestGif,
    clearGifsList,
    gifClicked
}











