import * as types from './types';

const changeSearchField = (searchString) => ({
    type: types.CHANGE_SEARCH_FIELD,
    payload: searchString
})

export {
    changeSearchField
}




