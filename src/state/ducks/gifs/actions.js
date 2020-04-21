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

const sendRequestGifSuccess = (data) => ({
    type: types.REQUEST_GIF_SUCCESS,
    payload: data
})

const sendRequestGifFailed = () => ({
    type: types.REQUEST_GIF_FAILED
})

const clearGifsList = () => ({
    type: types.CLEAR_GIFS_LIST,
    payload: []    
})

const copyGifSuccess = (data) => ({
    type: types.COPY_GIF_SUCCESS,
    payload: data
})

const copyGifFailed = (data) => ({
    type: types.COPY_GIF_FAILED,
    payload: data
})

export {
    changeSearchField,
    sendRequestGifPending,
    sendRequestGifSuccess,
    sendRequestGifFailed,
    clearGifsList,
    copyGifSuccess,
    copyGifFailed
}




