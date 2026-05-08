import PlayerBoard from "./PlayerBoard.jsx";

import { useContext } from "react";
import { LudoContext } from "../../store/context";

export default function PlayerBoardWrapper() {
    const { players } = useContext(LudoContext);

    return (
      <div className="lkg-playerboard">
        {players.map((player, index) => {
          return <PlayerBoard key={`playerboard-${index}`} team={index} />;
        })}
      </div>
    );
}