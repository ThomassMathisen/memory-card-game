import React from "react";
import "../styles/Header.css"
import Scoreboard from "./Scoreboard";

export default function Header(props) {
  return (
    <header className="header">
      <div>
        <h1>Memory Card Game</h1>
        <p>Don't click on the same card twice!</p>
      </div>
      <Scoreboard score={props.scores} />
    </header>
  );
}