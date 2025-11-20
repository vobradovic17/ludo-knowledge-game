import { useState, useRef } from 'react'
import { words } from '../../words.js'
import { shuffle } from 'lodash-es'
import Header from './Header.jsx'
import Question from './Question.jsx'
import Input from './Input.jsx'
import Footer from './Footer.jsx'


export default function QuestionModal({ dialogRef, turn, playerNames, diceNumber, totalCasts, numberOfCasts, checkWord }) {
    const [playerWordInput, setPlayerWordInput] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    const wordsToGuess = useRef(shuffle(words))
    const wordIndex = useRef(0);

    let wordToGuess = wordsToGuess.current[wordIndex.current];

    let wordToGuessArray = Array.from(wordToGuess.word);
    let playerWordInputArray = Array.from(playerWordInput)

    function handlePlayerWordInput(event) {
        setPlayerWordInput(event.target.value)
    }

    function handleCheck() {
        setIsSubmitted(true);
        setIsCorrect(checkWord(playerWordInput, wordToGuess));
        setTimeout(() => {
            setIsSubmitted(false);
            setIsCorrect(false);
            if (wordsToGuess.current.length - 1 > wordIndex.current) {
              wordIndex.current++;
            }
            else {
              wordIndex.current = 0
            }
            setPlayerWordInput('');
        }, 1000)
    }

    return (
      <dialog className="lkg-dialog" ref={dialogRef}>
        <div className="dialog-wrapper">
          <Header
            turn={turn}
            playerNames={playerNames}
            diceNumber={diceNumber}
            totalCasts={totalCasts}
            numberOfCasts={numberOfCasts}
          />
          <div className="lkg-dialog__body">
            <Question
              wordToGuess={wordToGuess}
              wordIndex={wordIndex}
              wordToGuessArray={wordToGuessArray}
              playerWordInputArray={playerWordInputArray}
              isSubmitted={isSubmitted}
              isCorrect={isCorrect}
            />
            <Input
              playerWordInput={playerWordInput}
              handlePlayerWordInput={handlePlayerWordInput}
              handleCheck={handleCheck}
            />
          </div>
          <Footer
            isSubmitted={isSubmitted}
            isCorrect={isCorrect}
            handleCheck={handleCheck}
          />
        </div>
      </dialog>
    );
}