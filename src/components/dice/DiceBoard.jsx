import DiceImage from "./DiceImage"

export default function DiceBoard({ diceNumber, rollDice, diceDisabled, totalCasts, numberOfCasts }) {
    return (
      <div className="lkg-diceboard">
        <button className="lkg-diceboard__button" onClick={rollDice} disabled={diceDisabled}>
          Roll dice
        </button>
        <span className="lkg-diceboard__dice">
          <DiceImage
            diceNumber={diceNumber}
            totalCasts={totalCasts}
            numberOfCasts={numberOfCasts}
          />
        </span>
      </div>
    );
}