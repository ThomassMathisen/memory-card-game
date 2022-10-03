import React, { useEffect, useState } from "react";
import styled from "styled-components"
import Scoreboard from "./Scoreboard/Scoreboard";
import CardDisplay from "./CardsDisplay/CardDisplay"
import { capitalizeFirstLetter, shuffleArray } from "../utils"

const Main = () => {
  const CARDS_AMOUNT = 10
  const [cards, setCards] = useState([])
  const [clickedCards, setClickedCards] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const loadCards = async () => {
      setCards(shuffleArray(await fetchCards(CARDS_AMOUNT)))
    }

    loadCards()
  }, [])

  const fetchCards = async (amount) => {
    const cards = []

    for (let i = 1; i <= amount; i++) {
      const cardsUrl = `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${i}`
      const response = await fetch(cardsUrl)
      const card = await response.json()
      const id = card.deck_id
      const name = capitalizeFirstLetter(card.value)
      const image = card.image
      cards.push({ id, name, image })
    }

    return cards
  }

  const handleCardClick = (e) => {
    const cardName = e.target.parentnode.lastChild.textContent
    playRound(cardName)
    setCards(shuffleArray(cards))
  }

  const playRound = (cardName) => {
    if (clickedCards.includes(cardName)) {
      resetGame()
    } else {
      const newScore = currentScore + 1
      if (newScore > highScore) setHighScore(newScore)
      setCurrentScore(newScore)
      setClickedCards((prevState) => [...prevState, cardName])
    }
  }

  const resetGame = () => {
    setClickedCards([])
    setCurrentScore(0)
  }

  return (
    <MainWrapper>
      <Scoreboard>
        currentScore={currentScore}
        highScore={highScore}
      </Scoreboard>
      <CardDisplay
        cards={cards}
        handleCardClick={handleCardClick}
      ></CardDisplay>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  margin-bottom: 3.5rem;
`

export default Main