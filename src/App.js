import React, { Component } from 'react';
import Guesses from './components/guesses';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="main">

        <header>
          <h1>Welcome to Hangman Game!</h1>
        </header>


        <Guesses/>

      </div>
    );
  }
}

export default App;
