import React from 'react';
import {connect} from 'react-redux';
import Gif from '../components/Gif';
import {gifsOperations} from '../../state/ducks/gifs';

const mapStateToProps = (state) => {
    return {
        gifs: state.gifsState.requestGifReducer.gifs
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        gifClicked: (elementId, gifUrl) => gifsOperations.gifClicked(dispatch, elementId, gifUrl) 
    };
}

const GifsList = ({ gifs, gifClicked }) => {



    return (
        <div>
            {gifs.map((gif, i) => {
                return <Gif 
                        key={gif.id}
                        keyProp={gif.id}
                        urlOriginal={gif.images.original.url}
                        sizeOriginal={gif.images.original.size}
                        gifClicked={gifClicked}
                        />;
            })}

            <p>{gifs.length}</p>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GifsList);