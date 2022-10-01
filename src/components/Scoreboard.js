import React from "react";

export default function Scoreboard(props) {
  return (
    <section className="scoreboard-container">
      <article className="scoreboard-item">
        Score: {props.scores.current}
      </article>
      <article className="scoreboard-item">
        High Score: {props.scores.best}
      </article>
    </section>
  );
}