import Dice1 from "./Dice1"
import Dice2 from "./Dice2"
import Dice3 from "./Dice3"
import Dice4 from "./Dice4"
import Dice5 from "./Dice5"
import Dice6 from "./Dice6"

import { useContext } from "react";
import { LudoContext } from "../../store/context";

export default function DiceImage() {
    const { diceNumber, totalCasts, numberOfCasts } = useContext(LudoContext);

    let diceImages = [
        <Dice1 />,
        <Dice2 />,
        <Dice3 />,
        <Dice4 />,
        <Dice5 />,
        <Dice6 />
    ]

    let castRemaining = totalCasts.current > numberOfCasts.current;
    let selectedImage = castRemaining || diceNumber == 6;

    return (
        (selectedImage ? diceImages[diceNumber - 1] : '?')
    )
}