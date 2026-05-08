import { useContext } from "react";
import { LudoContext } from "../../store/context";

export default function PlayerInfo({ team }) {
    const { playerNames, setPlayerNames } = useContext(LudoContext);

    let playerName = playerNames[team].name;

    function handleInput(event) {
        setPlayerNames((oldValue) => {
            let newValue = [...oldValue];
            newValue[team].name = event.target.value
            return newValue;
        })
    }

    return (
        <div className="lkg-player-name">
            <input type="text" onChange={handleInput} value={playerName}/>
        </div>
    )
}