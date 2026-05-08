import PlayerInfo from "./PlayerInfo";
import DiceBoard from "../dice/DiceBoard";

import { useContext } from "react";
import { LudoContext } from "../../store/context";

export default function PlayerBoard({ team }) {

  const { turn } = useContext(LudoContext);

  let onTurn = team == turn;

  let className = 'lkg-playerboard__team';

  if (onTurn) {
      className += ' lkg-playerboard__team--active'
  }

  return (
    <div className={className}>
      <PlayerInfo team={team}/>
      {onTurn && <DiceBoard/>}
    </div>
  );
}