import React from 'react'
import '../style/gameboard.css'
import Cards from '../components/Cards'

const GameBoard = () => {
  return (
    <div className='gameboard'>
        <h1>Memory Game - React</h1>
        <Cards />
        {/* <div className='container'></div> */}

    </div>
  )
}

export default GameBoard