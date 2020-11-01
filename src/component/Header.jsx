import React from "react";
import Statistics from "./Statistics"

export const Header = (props) => {
  return (
    <header className='header'>
      <h1 className="h1">{props.title}</h1>
      <Statistics players={props.players}></Statistics>
    </header>
  );
}


