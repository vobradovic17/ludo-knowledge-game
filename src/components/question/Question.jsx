import { useState, useEffect } from "react";
import { shuffle } from "lodash-es";

export default function Question({ wordToGuess, wordIndex, wordToGuessArray, playerWordInputArray, isSubmitted, isCorrect }) {
    const [description, setDescription] = useState('')
  
    let className = 'lkg-dialog__guess-word';

    if (isSubmitted) {
        className += ' lkg-dialog__guess-word--submitted'
        if (isCorrect) {
            className += ' lkg-dialog__guess-word--correct'
        }
        else {
            className += ' lkg-dialog__guess-word--wrong'
        }
    }

    useEffect(() => {
      setDescription(shuffle(wordToGuess.description)[0])
    }, [wordToGuess])

    return (
      <div className="lkg-dialog__word">
        <div className="lkg-dialog__info">
          <span>Type: <span>{wordToGuess.type}</span>;</span>
          <span>Letters: <span>{wordToGuessArray.length}</span>;</span>
        </div>
        <div className="lkg-dialog__description">
          {description}
        </div>
        <div className={className}>
          {wordToGuessArray.map((letter, index) => {
            if (index == 0 && !playerWordInputArray[0]) {
              return <span key={`word-${wordIndex}-${index}`}>{letter}</span>;
            } else {
              return (
                <span key={`word-${wordIndex}-${index}`}>
                    {playerWordInputArray[index]?.toLowerCase()}
                </span>
              );
            }
          })}
        </div>
      </div>
    );
}