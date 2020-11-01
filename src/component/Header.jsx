import React from "react";
import Statistics from "./Statistics"
import Stopwatch from "./Stopwatch"

export const Header = (props) => {
  return (
    <header className='header'>
      <h1 className="h1">{props.title}</h1>
      <Statistics players={props.players}></Statistics>
      <Stopwatch></Stopwatch>
    </header>
  );
}


