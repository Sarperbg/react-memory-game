import React, { useState } from "react";
import "../style/header.css";
import avatar1 from '../Img/avatar1.png'
import avatar2 from '../Img/avatar2.png'
import Cards from "./Cards";
const Header = ({moves , setMoves , scores }) => {
  return (
    <div className="header">
      <div className="left-player">
        <div className="avatar-left">
          <img src={avatar1} alt='' />
        </div>
        <div className="player1">
          <span className="player-1-span">Player 1</span>
          <label className="player-1-label">Moves: {moves}
           

          </label>
          <label className="player-1-label">Score: {scores}</label>
        </div>
        <hr className="hr" />
      </div>
      <div className="right-player">
        <div className="player2">
          <span className="player-2-span">Player 2</span>
          <label className="player-2-label">Moves: {moves}</label>
          <label className="player-2-label">Score: {scores}</label>
        </div>
        <div className="avatar-right">
        <img src={avatar2} alt='' />

        </div>
      </div>
    </div>
  );
};

export default Header;
