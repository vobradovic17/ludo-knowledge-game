import DiceImage from "../dice/DiceImage";

export default function Header({ turn, playerNames, diceNumber, totalCasts, numberOfCasts }) {
    let className = `lkg-dialog__header lkg-dialog__header--player${turn + 1}`
    
    return (
      <div className={className}>
        <span>{playerNames[turn].name}</span>
        <span className="lkg-dialog__dice-wrapper">
            <DiceImage diceNumber={diceNumber} totalCasts={totalCasts} numberOfCasts={numberOfCasts}/>
        </span>
      </div>
    );
}