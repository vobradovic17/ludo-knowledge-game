import DiceImage from "../dice/DiceImage";

import { useContext } from "react";
import { LudoContext } from "../../store/context";

export default function Header() {
  const { turn, playerNames } = useContext(LudoContext);

  let className = `lkg-dialog__header lkg-dialog__header--player${turn + 1}`
    
  return (
    <div className={className}>
      <span>{playerNames[turn].name}</span>
      <span className="lkg-dialog__dice-wrapper">
          <DiceImage/>
      </span>
    </div>
  );
}