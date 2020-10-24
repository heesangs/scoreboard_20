import React from "react";

export const Header = (props) => {
  return (
    <header className='header'>
      <h1 className="h1">{props.title}</h1>
      <span className="stats">{props.players}</span>
    </header>
  );
}


