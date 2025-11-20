export default function GameOver({ turn, playerNames, resetGame }) {
    return (
        <div className="lkg-game-over">
            <div className="lkg-game-over__message">
                <span>{playerNames[turn].name.toUpperCase()}</span> WINS!!!
            </div>
            <button className="lkg-game-over__reset" onClick={resetGame}>RESET GAME</button>
        </div>
    )
}