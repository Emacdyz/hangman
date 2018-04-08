import React, { Component } from 'react';
import Guesses from './components/guesses'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to Hangman Game!</h1>
          <img src='../hangman.png' className="App-logo" alt="logo" />
        </header>
        <Guesses/>

      </div>
    );
  }
}

export default App;
