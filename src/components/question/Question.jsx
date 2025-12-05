import { useState, useEffect, useCallback } from "react";
import { shuffle } from "lodash-es";

export default function Question({ wordToGuess, wordIndex, wordToGuessArray, playerWordInputArray, isSubmitted, isCorrect, showHint }) {
    const [description, setDescription] = useState('')
    const [hintLetters, setHintLetters] = useState([])
  
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

    const getRandomHintIndex = useCallback(function getRandomHintIndex() {
      return Math.floor(Math.random() * (wordToGuess.word.length - 1) + 1) 
    }, [wordToGuess])

    useEffect(() => {
      let numberOfHints = Math.floor(wordToGuess.word.length * 0.3) + 1;
      let hints = [];
      
      for (let i = 0; i < numberOfHints; i++) {
        let randomHintIndex;
        if (i == 0) {
          randomHintIndex = getRandomHintIndex()
        }
        else {
          do {
            randomHintIndex = getRandomHintIndex()
          }
          while (hints.includes(randomHintIndex))
        }
        hints.push(randomHintIndex)
      }

      setHintLetters(() => {
        let newHintArray = Array.from(wordToGuess.word).map((item, index) => {
          return hints.includes(index)
        })
        return newHintArray;
      })
    }, [wordToGuess, getRandomHintIndex])

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
                  {!(
                    showHint &&
                    !playerWordInputArray[index] &&
                    hintLetters[index] &&
                    !isSubmitted
                  ) ? (
                    playerWordInputArray[index]?.toLowerCase()
                  ) : (
                    <div className="lkg-hint">{letter}</div>
                  )}
                </span>
              );
            }
          })}
        </div>
      </div>
    );
}