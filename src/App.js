import React, { Component } from 'react';
import Guesses from './components/guesses';

class App extends Component {

  render() {
    return (
      <div className="main">
        <Guesses/>
      </div>
    );
  }
}

export default App;
