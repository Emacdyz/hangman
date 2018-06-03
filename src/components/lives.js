//src/components/live.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class Lives extends PureComponent  {
    
    render() {
         
        const {lives} = this.props

        if (lives === 8) return null
        else if (lives === 7) return <img src={'../../hangman/1'} alt="7 lives left"/>
        else if (lives === 6) return <img src={'../hangman/2'} alt="6 lives left"/>
        else if (lives === 5) return <img src={'../hangman/3'} alt="5 lives left"/>
        else if (lives === 4) return <img src={'../hangman/4'} alt="4 lives left"/>
        else if (lives === 3) return <img src={'../hangman/5'} alt="3 lives left"/>
        else if (lives === 2) return <img src={'../hangman/6'} alt="2 lives left"/>
        else if (lives === 1) return <img src={'../hangman/7'} alt="1 lives left"/>
        else if (lives === 0) return <img src={'../hangman/8'} alt="Game over"/>
        
    }
}

const mapStateToProps = (state) => ({
    guesses: state.guesses,
    lives: state.lives
})

export default connect(mapStateToProps) (Lives)

