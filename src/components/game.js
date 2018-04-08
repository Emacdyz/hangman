import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
//need to import the link to start the game
import './game.css'

const data = ["awkward", "banjo", "hammer", "croquet", "dwarves", "gypsy", "ivory", "jukebox", "kayak", "salad", "kiosk", "window", "duck", "paintball"]


export default class StartButton extends PureComponent {

  constructor(props) {
    super(props);

    this.chosenWord = data[Math.floor(Math.random()*data.length)];

    console.log(this.chosenWord)

    this.playerWord = this.chosenWord.replace(/./g, "_");

    console.log(this.playerWord);

  }

  render () {
    return (
      <div className="gameContainer">
      <h2> Guess the following word (you have 6 lifes): </h2>
      <p> {this.playerWord} </p>

      </div>

      //
    )
  }
}

// <button
//  onClick={this.handleClick}
//  className="StartButton">
//  Start a new round!
//</button>

// need a connect fonction
