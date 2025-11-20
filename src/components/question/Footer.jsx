export default function Footer({ isSubmitted, isCorrect, handleCheck }) {
    let buttonClass = "lkg-dialog__button";

    if (isSubmitted) {
        buttonClass += isCorrect ? " lkg-dialog__button--correct" : " lkg-dialog__button--wrong"
    }

    return (
      <div className="lkg-dialog__footer">
        <button className={buttonClass} onClick={handleCheck} disabled={isSubmitted}>
          {!isSubmitted ? "Check" : isCorrect ? "Correct" : "Wrong"}
        </button>
      </div>
    );
}