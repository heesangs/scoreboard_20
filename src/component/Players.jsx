import Counter from "./Counter";
import React from "react";

let Player = ({removePlayer, id, name, score, changeScore}) => {
  return (
    <div className="player">
      <span className='player-name'>
      <button className='remove-player' onClick={() => removePlayer(id)}>x</button>
      <span className="player-name">{name}</span>
      </span>
      <Counter score={score} id={id} changeScore={changeScore}></Counter>
    </div>
  )
}

export default Player;