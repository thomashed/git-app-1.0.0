// 1 operation == X actions, e.g. an async request with thunk would be at least 3 actions
// this is the interface for our actions, and the interface for our duck
// a thunk will dispatch here, while an operation with only 1 action, will link to that action
import * as actions from './actions';

const changeSearchField = actions.changeSearchField;

// sendRequestGif --> async, so its a thunk, we therefore use return function 
const sendRequestGif = (searchString) => (dispatch) => {
    dispatch(actions.sendRequestGifPending());

    fetch('https://api.giphy.com/v1/gifs/search?api_key=Hd1fR0FW1u2HXkBFYL1jVNXIub1V081Y&q=ryan gosling&limit=50&offset=0&rating=G&lang=en')
    .then(response => response.json())
    .then(response => {
        // filter for size, less than 2.1 mb
        const sortedData = [];
        response.data.forEach(gifObject => {
            if(gifObject.images.original.size <= 2100000){
                sortedData.push(gifObject)
            }
        });
        dispatch(actions.sendRequestGifSuccess(sortedData));
    })
    .catch(error => {
        dispatch(actions.sendRequestGifFailed());
    });
}
 
const clearGifsList = actions.clearGifsList;

const gifClicked = (dispatch, elementId, gifUrl) => {
    try{
        var input = document.createElement('input');
        input.type = 'text';
        input.id = elementId;
        input.value = gifUrl;
        document.body.appendChild(input);
        input.select()
        input.setSelectionRange(0, 99999);
        document.execCommand('copy');
        dispatch(actions.copyGifSuccess(input.value));
    }catch(err){
        dispatch(actions.copyGifFailed(err));
    }finally{
        document.body.removeChild(input);
    }
    // TODO: add reducer functions
}

export {
    changeSearchField,
    sendRequestGif,
    clearGifsList,
    gifClicked
}











