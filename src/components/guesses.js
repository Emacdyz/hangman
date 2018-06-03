//src/components/guesses.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {letterguessed} from '../actions/guessedLetter'
import Lives from './lives'
import './guesses.css'

class Guesses extends PureComponent {

  state = {
    guess: ''
  }

  handleChange = (event) => {
    this.setState({guess: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.letterguessed(this.state.guess)
  }

  render (){
    const {guesses, lives} = this.props

    return (

      <div className="gameContainer">
        <div className="computer">
          <h2> Guesses left: {lives} </h2>
          <p> {guesses} </p>
        </div>

        <div className="player-input">
        <form onSubmit={this.handleSubmit}>
          <h2>Make a guess: </h2>
            <select value={this.state.guess} onChange={this.handleChange}>
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
        
        <Lives/>
        

      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  guesses: state.guesses,
  lives: state.lives
})

export default connect(mapStateToProps, {letterguessed}) (Guesses)

