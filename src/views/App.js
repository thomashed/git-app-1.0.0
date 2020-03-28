import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Gif from './components/Gif';
import SearchGif from './containers/SearchGif';

class App extends Component {

  render() {
    return(
      <div className="App">
        <header className="App-header">
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with Ducks
          </a>
        </header>

        <SearchGif />

        <Gif />

      </div>
  )
  }
  
}

export default App;
