import { useContext } from "react";
import { LudoContext } from "../../store/context";

export default function DiceButton() {
    const { rollDice, diceDisabled } = useContext(LudoContext);

    return (
        <button className="lkg-diceboard__button" onClick={rollDice} disabled={diceDisabled}>
            Roll dice
        </button>
    )
}