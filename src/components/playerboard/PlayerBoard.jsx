import PlayerInfo from "./PlayerInfo";
import DiceBoard from "../dice/DiceBoard";

export default function PlayerBoard({ team, turn, diceNumber, rollDice, diceOn, totalCasts, numberOfCasts }) {

    let onTurn = team == turn;

    let className = 'lkg-playerboard__team';

    if (onTurn) {
        className += ' lkg-playerboard__team--active'
    }

    return (
        <div className={className}>
            <PlayerInfo team={team} />
            {onTurn && (
                <DiceBoard
                    diceNumber={diceNumber}
                    rollDice={rollDice}
                    diceOn={diceOn}
                    totalCasts={totalCasts}
                    numberOfCasts={numberOfCasts}
                />
            )}
        </div>
    );
}