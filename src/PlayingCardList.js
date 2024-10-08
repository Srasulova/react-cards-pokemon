import React from "react";
import { v1 as uuid } from "uuid";
// import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const [cards, addCard] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );

  const addNewCard = () => {
    addCard(); // No URL ending needed here
  };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addNewCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
