export default function Question({ wordToGuess, wordIndex, wordToGuessArray, playerWordInputArray, isSubmitted, isCorrect }) {
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

    return (
      <div className="lkg-dialog__word">
        <div className="lkg-dialog__description">
          {wordToGuess.description[0]}
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