import React from 'react';
import FlashCard from './FlashCard';


const CardsList = (props) => {
  return props.cardsObject.map(card => {
    return <FlashCard key={card.id} cardObject={card} />
  })
}

export default CardsList;
