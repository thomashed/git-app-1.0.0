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
        sendRequestGif: (searchString) => dispatch(gifsOperations.sendRequestGif(searchString))   
    }
};


const SearchGif = ({searchField, changeSearchField, sendRequestGif}) => {
    let input;

    return(
        <div>
            <div className='ma1 pa1 f-5'>
                <p>
                    {searchField}
                </p>
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
                className='shadow-3 ma5 pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='type here to search'
            />

            <button type='submit'>
                SEARCH
            </button>

            </form>
        </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchGif);

