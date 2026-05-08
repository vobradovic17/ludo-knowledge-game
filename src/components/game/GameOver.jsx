import { useContext } from "react";
import { LudoContext } from "../../store/context";

export default function GameOver() {
    const { turn, playerNames, resetGame } = useContext(LudoContext);

    return (
        <div className="lkg-game-over">
            <div className="lkg-game-over__message">
                <span>{playerNames[turn].name.toUpperCase()}</span> WINS!!!
            </div>
            <button className="lkg-game-over__reset" onClick={resetGame}>RESET GAME</button>
        </div>
    )
}