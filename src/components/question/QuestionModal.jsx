import { useState, useRef, useCallback } from 'react'
import Header from './Header.jsx'
import Question from './Question.jsx'
import Input from './Input.jsx'
import QuestionTimer from './QuestionTimer.jsx'
import Footer from './Footer.jsx'


export default function QuestionModal({ dialogRef, turn, playerNames, diceNumber, totalCasts, numberOfCasts, timerOn, wordToGuess, checkWord }) {
    const [playerWordInput, setPlayerWordInput] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [showHint, setShowHint] = useState(false);

    const wordIndex = useRef(0);

    const footerButton = useRef();

    let wordToGuessArray = Array.from(wordToGuess.word);
    let playerWordInputArray = Array.from(playerWordInput)

    const submitAnswer = useCallback(function submitAnswer() {
      footerButton.current.click()
    }, [])

    function handlePlayerWordInput(event) {
      if (!isSubmitted) {
        setPlayerWordInput(event.target.value)
      }
    }

    function handleCheck() {
      setIsSubmitted(true);
      setIsCorrect(checkWord(playerWordInput, wordToGuess));
      setTimeout(() => {
        setIsSubmitted(false);
        setIsCorrect(false);
        wordIndex.current++;
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
              showHint={showHint}
            />
            <Input
              playerWordInput={playerWordInput}
              handlePlayerWordInput={handlePlayerWordInput}
              handleCheck={handleCheck}
            />
            {timerOn && (
              <QuestionTimer
                isSubmitted={isSubmitted}
                showHint={showHint}
                setShowHint={setShowHint}
                handleCheck={submitAnswer}
              />
            )}
          </div>
          <Footer
            isSubmitted={isSubmitted}
            isCorrect={isCorrect}
            handleCheck={handleCheck}
            footerButton={footerButton}
          />
        </div>
      </dialog>
    );
}