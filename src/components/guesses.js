import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './guesses.css'
import '../reducers/guesses'

// import css
const data = ["awkward", "banjo", "hammer", "croquet", "dwarves", "gypsy", "ivory", "jukebox", "kayak", "salad", "kiosk", "window", "duck", "paintball"]

export class Guesses extends PureComponent {

  constructor (props) {
    super();

    this.chosenWord = data[Math.floor(Math.random()*data.length)];

    console.log(this.chosenWord)

    this.playerWord = this.chosenWord.replace(/./g, "_");

    console.log(this.playerWord)

    this.state = {
      guesses: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  checkLetter(letter) {

    let index = this.chosenWord.indexOf(this.letterTextInput.value);

    if (index === -1) {

      console.log('Wrong guess')

      // letter is not in chosen word
    } else { 

      // letter is in chosen word

      this.playerWord[index] = letter; //replace the _ by the letter

      findIndexOfLetter(letter, index + 1);

    }

    function findIndexOfLetter(letter, start) {

      if (start === undefined) {
        start = 0;
      }

      return index = this.chosenWord.indexOf(letter);

    }
  };

  handleClick () {
    if (this.letterTextInput !== null) {
      this.setState({
        guesses: this.state.guesses.concat(this.letterTextInput.value)
      });
    }
  }


  render (){
    let letters = this.state.guesses.map(letter => {
      return <li>{letter}</li>;
    });
  return (

    <div className="gameContainer">
      <div className="computer">
      <h2> Guess the following word (you have 6 lifes): </h2>
      <p> {this.playerWord} </p>
      </div>
      <div className="player-input">
        <input type="text" placeholder="Make a guess" ref={(ref) => this.letterTextInput = ref} className="input-field" />
        <button type="button" className="input-button" onClick={this.handleClick}>Submit</button>
      </div>

      <div className="show-guesses">
        <ol>
          {letters}
        </ol>
      </div>
    </div>
)

    // <GuessCount count={this.state.guesses.length} /)
  }

}

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses
  }
};

const  mapDispatchToProps = dispatch => {
  return {
    guesses : (letter) => dispatch({type: 'GUESSED_LETTER', payload: 'letter' })
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Guesses)
