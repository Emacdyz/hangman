import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './guesses.css'
import {playerWord, chosenWord} from'../reducers/guesses'

// import css

class Guesses extends PureComponent {

  constructor (props) {
    super();

    console.log(chosenWord)

    console.log(playerWord)

    this.state = {
      guesses: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkLetter(letter) {
    this.props.dispatch({type:"GUESSED_LETTER", payload: this.state.guesses})
  }

  handleChange(event) {
    if (this.letterTextInput !== null) {
   this.setState({guesses: event.target.value})
  //  this.setState({
      //guesses: this.state.guesses.concat(this.letterTextInput.value)
      }
    }

  handleSubmit (event) {

    this.checkLetter(this.state.guesses);
    event.preventDefault();
    }

  render (){
    //let letters = this.state.guesses.map(function (letter) {
      //return <li>{letter}</li>
  //  });

  return (

    <div className="gameContainer">
      <div className="computer">
        <h2> Guess the following word (you have 6 lifes): </h2>
        <p> {playerWord} </p>
      </div>
      <div className="player-input">
      <form onSubmit={this.handleSubmit}>
         <h2>Make a guess: </h2>
          <select  value={this.state.guesses} onChange={this.handleChange}>
           <option value="a">A</option>
           <option value="b">B</option>
           <option value="c">C</option>
           <option value="d">D</option>
           <option value="e">E</option>
           <option value="f">F</option>
           <option value="g">G</option>
           <option value="h">H</option>
           <option value="i">I</option>
           <option value="j">J</option>
           <option value="k">K</option>
           <option value="l">L</option>
           <option value="m">M</option>
           <option value="n">N</option>
           <option value="o">O</option>
           <option value="p">P</option>
           <option value="q">Q</option>
           <option value="r">R</option>
           <option value="s">S</option>
           <option value="t">T</option>
           <option value="u">U</option>
           <option value="v">V</option>
           <option value="w">W</option>
           <option value="x">X</option>
           <option value="y">Y</option>
           <option value="z">Z</option>
         </select>
       <input type="submit" value="Submit" />
     </form>
      </div>

    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    playerWord: state.playerWord
  }
}

export default connect(mapStateToProps) (Guesses)

//checkLetter(letter) {

//  let index = this.chosenWord.indexOf(this.letterTextInput.value);

//  if (index === -1) {

  //  console.log('Wrong guess')

    // letter is not in chosen word
//  } else { 

    // letter is in chosen word


//  };
