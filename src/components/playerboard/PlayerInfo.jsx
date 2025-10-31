import { useState } from "react"

export default function PlayerInfo({ team }) {
    const [playerName, setPlayerName] = useState(`Player ${team + 1}`);

    function handleInput(event) {
        setPlayerName(event.target.value);
    }

    return (
        <div className="lkg-player-name">
            <input type="text" onChange={handleInput} value={playerName}/>
        </div>
    )
}