import React from 'react';
import {gifsOperations} from '../../state/ducks/gifs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return{
        searchField: state.gifsState.changeSearchFieldReducer.searchField
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSearchField: (searchString) => dispatch(gifsOperations.changeSearchField(searchString)),
        sendRequestGif: (searchString) => dispatch(gifsOperations.sendRequestGif(searchString)),
        clearGifsList: () => dispatch(gifsOperations.clearGifsList())   
    }
};


const SearchGif = ({searchField, changeSearchField, sendRequestGif, clearGifsList}) => {
    let input;

    return(
        <div>
            <div className='f-5 ma3'>
                    Current Search: {searchField}
            </div>
            
            <div className='dib'>
                <div className='dib'>
                    <button onClick={clearGifsList}>CLEAR</button>
                </div>

                <form
                    onSubmit={(e) => {
                                e.preventDefault();
                                if(!input.value.trim()){
                                    return;
                                }
                                changeSearchField(input.value);
                                sendRequestGif(input.value);
                            }}
                >
                
                <input
                    ref={node => {
                        input = node
                    }}
                    id='id_searchField'
                    className='shadow-3 ma2 pa3 ba b--green bg-lightest-blue' 
                    type='search' 
                    placeholder='type here to search'
                />

                <button type='submit'>
                    SEARCH
                </button>

                </form>
            </div>
        </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchGif);

