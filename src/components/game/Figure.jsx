import FigureIcon from "./FigureIcon"

export default function Figure({ figure, handleMove }) {
    let className = 'lkg-figure';

    if (figure.eligible) {
        className += ' lkg-figure--eligible'
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