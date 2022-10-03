import React from "react"
import styled from "styled-components"
import Card from "./Card"

const CardDisplay = ({ cards, handleCardClick }) => {
  const deckOfCards = cards.map((card) => (
    <Card key={card.id} card={card.value} handleCardClick={handleCardClick}/>
  )) 
  return <CardsDisplayWrapper>{deckOfCards}</CardsDisplayWrapper>
}

const CardsDisplayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default CardDisplay