import {useState} from "react";
import {shuffle} from 'lodash';
import Images from '../Images'
import "../style/header.css";
import avatar1 from '../Img/avatar1.png'
import avatar2 from '../Img/avatar2.png'
import '../style/gameboard.css'

function GameBoard() {
    const [cards,setCards] = useState( shuffle([...Images, ...Images]) );
    const [clicks,setClicks] = useState(0);
    const [won,setWon] = useState(false);
    const [activeCards,setActiveCards] = useState([]);
    const [foundPairs,setFoundPairs] = useState([]);
  
    function flipCard(index) {
      if (won) {
        setCards(shuffle([...Images, ...Images]));
        setFoundPairs([]);
        setWon(false);
        setClicks(0);
      }
      if (activeCards.length === 0) {
        setActiveCards([index]);
      }
      if (activeCards.length === 1) {
        const firstIndex = activeCards[0];
        const secondsIndex = index;
        if (cards[firstIndex] === cards[secondsIndex]) {
          if (foundPairs.length + 2 === cards.length) {
            setWon(true);
          }
          setFoundPairs( [...foundPairs, firstIndex, secondsIndex] );
        }
        setActiveCards([...activeCards, index]);
      }
      if (activeCards.length === 2) {
        setActiveCards([index]);
      }
      setClicks(clicks + 1);
    }
  
    return (
      <div>
         <div className="header">
      <div className="left-player">
        <div className="avatar-left">
          <img src={avatar1} alt='' />
        </div>
        <div className="player1">
          <span className="player-1-span">Player 1</span>
          <label className="player-1-label">Moves: {clicks}</label>
          <label className="player-1-label">Best score:{foundPairs.length/2}</label>
        </div>
        <hr className="hr" />
      </div>
      <div className="right-player">
        <div className="player2">
          <span className="player-2-span">Player 2</span>
          <label className="player-2-label">Moves: {clicks}</label>
          <label className="player-2-label">Best score:{foundPairs.length/2}</label>
        </div>
        <div className="avatar-right">
        <img src={avatar2} alt='' />

        </div>
      </div>
    
    </div>
    <div className="stats">
          {won && (
            <>You won the game! Congratulations!<br />
              Click any card to play again.<br /><br />
            </>
          )}
        </div>
        <div className="board">
          {cards.map((card,index) => {
            const flippedToFront =  (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1;
            return (
              <div className={"card-outer " + (flippedToFront ? 'flipped' : '')}
                   onClick={() => flipCard(index)}>
                <div className="card">
                  <div className="front">
                    <img src={card} alt=""/>
                  </div>
                  <div className="back" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="stats">
          {won && (
            <>You won the game! Congratulations!<br />
              Click any card to play again.<br /><br />
            </>
          )}
        </div>
      </div>
    );
  }
  
  export default GameBoard;