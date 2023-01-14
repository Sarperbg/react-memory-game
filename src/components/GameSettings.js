import React from 'react'
import "../style/gamesettings.css";

const GameSettings = () => {
  return (
    <div className="App">
      <div className="login-page-header">
        <h1 className="header-text">MEMORY GAMES</h1>
      </div>

      <div className="login-page-content">
            <button className="btn-settings">SETTINGS</button>

            <button className="btn-start">START</button>
      </div>
    </div>
  )
}

export default GameSettings