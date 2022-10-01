import React from "react";
import CardDisplay from "./CardDisplay"

export default function Main(props) {
  return (
    <main className="main">
      <CardDisplay setScores={props.setScores} />
    </main>
  )
}