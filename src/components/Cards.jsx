import React, { useState } from "react";
import flashcards from "./flashcards";

const Cards = () => {
  const [cards, setCards] = useState(flashcards);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-3 gap-8">
        {cards.map((flash) => (
          <div
            className=" flex flex-col gap-5 border-solid border-red-500 shadow-xl rounded-lg border h-50  mt-6 pt-6 
                          font-bold text-lg bg-violet-200
          "
          >
            <h4>{flash.id}</h4>
            <p>{flash.question}</p>
            <div className="">
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="border rounded w-45 bg-green-200"
              >
                {showAnswer ? "hide answer" : "Show Answer"}
              </button>
              {showAnswer && <p>{flash.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
