import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import SearchGif from './containers/SearchGif';
import GifsList from './containers/GifsList';

class App extends Component {

  render() {
    return(
      <div className="App">
        

        <SearchGif />

        <GifsList />

      </div>
  )
  }
  
}

export default App;
