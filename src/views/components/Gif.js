import React from 'react';


// shows a gif
// you click this component, and the GIF url is copied to clipboard --> function from args
// 

const Gif = ({ id, keyProp, urlOriginal, sizeOriginal, gifClicked }) => {

    return(
        <div id={id} className='dib tc grow bg-light-green br3 pa3 ma2 bw2 shadow-5'>
            <button onClick={() => gifClicked(id, urlOriginal)}>
                <p>keyProp: {keyProp}</p>
                <p>url: {urlOriginal}</p>
                <p>size: {sizeOriginal}</p>
            </button>
        </div>
    ) 
}

export default Gif; 


























