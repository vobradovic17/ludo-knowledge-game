export default function GameOver({ turn, resetGame }) {
    let color = ['red', 'blue', 'green', 'yellow']

    return (
        <div className="lkg-game-over">
            <div className="lkg-game-over__message">
                <span>{color[turn].toUpperCase()}</span> PLAYER WINS!!!
            </div>
            <button className="lkg-game-over__reset" onClick={resetGame}>RESET GAME</button>
        </div>
    )
}