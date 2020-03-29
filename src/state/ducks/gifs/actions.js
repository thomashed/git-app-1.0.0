import * as types from './types';

const changeSearchField = (searchString) => ({
    type: types.CHANGE_SEARCH_FIELD,
    payload: searchString
})

// REQUEST_GIF_PENDING,
// REQUEST_GIF_SUCCESS,
// REQUEST_GIF_FAILED

const sendRequestGifPending = () => ({
    type: types.REQUEST_GIF_PENDING
})

const sendRequestGifSuccess = () => ({
    type: types.REQUEST_GIF_SUCCESS
})

const sendRequestGifFailed = () => ({
    type: types.REQUEST_GIF_FAILED
})

export {
    changeSearchField,
    sendRequestGifPending,
    sendRequestGifSuccess,
    sendRequestGifFailed
}




