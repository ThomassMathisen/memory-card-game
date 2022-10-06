import React from "react";
import styled from "styled-components"

const Scoreboard = ({ currentScore, highScore }) => {
  return (
    <ScoreboardWrapper>
      <CurrentScore>Current score: {currentScore}</CurrentScore>
      <HighScore>High score: {highScore}</HighScore>
    </ScoreboardWrapper>
  )
}

const ScoreboardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 69rem;

  @media (max-width: 750px) {
    flex-direction: column;
    width: 250px;
    gap: 3rem;
  }
`

const Score = styled.div`
  padding: 0.5rem;
  width: 35%;
  font-size: 2rem;
  border-radius: 20px;
  font-weight: 700;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 750px) {
    width: 100%;
  }
`

const CurrentScore = styled(Score)`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.light};
`

const HighScore = styled(Score)`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.light};
`

export default Scoreboard