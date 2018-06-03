//src/components/guesses.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {letterguessed} from '../actions/guessedLetter'
import Lives from './lives'
import './guesses.css'

class Guesses extends PureComponent {

  handleClick = (event) => {
    event.preventDefault();
    this.props.letterguessed(event.target.value)
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
            <h2> Make a guess: </h2>
            <button value="a" onClick={this.handleClick}>A</button>
            <button value="b" onClick={this.handleClick}>B</button>
            <button value="c" onClick={this.handleClick}>C</button>
            <button value="d" onClick={this.handleClick}>D</button>
            <button value="e" onClick={this.handleClick}>E</button>
            <button value="f" onClick={this.handleClick}>F</button>
            <button value="g" onClick={this.handleClick}>G</button>
            <button value="h" onClick={this.handleClick}>H</button>
            <button value="i" onClick={this.handleClick}>I</button>
            <button value="j" onClick={this.handleClick}>J</button>
            <button value="k" onClick={this.handleClick}>K</button>
            <button value="l" onClick={this.handleClick}>L</button>
            <button value="m" onClick={this.handleClick}>M</button>
            <button value="n" onClick={this.handleClick}>N</button>
            <button value="o" onClick={this.handleClick}>O</button>
            <button value="p" onClick={this.handleClick}>P</button>
            <button value="q" onClick={this.handleClick}>Q</button>
            <button value="r" onClick={this.handleClick}>R</button>
            <button value="s" onClick={this.handleClick}>S</button>
            <button value="t" onClick={this.handleClick}>T</button>
            <button value="u" onClick={this.handleClick}>U</button>
            <button value="v" onClick={this.handleClick}>V</button>
            <button value="w" onClick={this.handleClick}>W</button>
            <button value="x" onClick={this.handleClick}>X</button>
            <button value="y" onClick={this.handleClick}>Y</button>
            <button value="z" onClick={this.handleClick}>Z</button>
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

