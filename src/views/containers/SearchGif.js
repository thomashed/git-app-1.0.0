import React from 'react';

const SearchGif = () => {
    let input;

    return(
        <div>
            <form
                onSubmit={(e) => {
                            e.preventDefault();
                            if(!input.value.trim()){
                                return;
                            }
                            // dispatch: we've changed the searchfield
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

export default SearchGif;

