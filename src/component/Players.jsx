import Counter from "./Counter";
import React from "react";

let Player = (props) => {
  return (
    <div className="player">
      <span className='player-name'>
      <button className='remove-player' onClick={() => props.removePlayer(props.id)}>x</button>
      <span className="player-name">{props.name}</span>
      </span>
      <Counter score={props.score}></Counter>
    </div>
  )
}

export default Player;