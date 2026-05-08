import FigureIcon from "./FigureIcon"

import { useContext } from "react";
import { LudoContext } from "../../store/context";

export default function Figure({ figure }) {
    const { turn, handleMove } = useContext(LudoContext);

    let className = 'lkg-figure';

    if (figure.eligible) {
        className += ' lkg-figure--eligible'
    }

    if (figure.player == turn) {
        className += ' lkg-figure--onturn'
    }
    
    let style = {
        'left': `${figure.x}%`,
        'top': `${figure.y}%`
    }

    return (
        <div className={className} style={style} onClick={() => {handleMove(figure)}}>
            <FigureIcon position={figure.position} eligible={figure.eligible}></FigureIcon>
        </div>
    )
}