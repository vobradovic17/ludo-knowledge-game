import { useContext } from "react";
import { LudoContext } from "../../store/context";

import GameOver from "./GameOver";

export default function GameOverWrapper() {
    const { gameOver } = useContext(LudoContext);

    return (
        gameOver && <GameOver/>
    )
}