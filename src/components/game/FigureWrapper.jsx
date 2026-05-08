import Figure from "./Figure";

import { useContext } from "react";
import { LudoContext } from "../../store/context";

export default function FigureWrapper() {
    const { players } = useContext(LudoContext);

    return players.map((player, index) => {
      return (
        <div className="lkg-team" key={`team-${index}`}>
          {player.map((figure, i) => {
            return <Figure key={`figure-${index}-${i}`} figure={figure} />;
          })}
        </div>
      );
    });
}