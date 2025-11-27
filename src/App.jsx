import { useState, useRef } from "react";
import { playersData, playerTracksData } from "./data.js";
import { cloneDeep } from 'lodash-es'
import PlayerBoard from "./components/playerboard/PlayerBoard.jsx";
import Figure from "./components/game/Figure.jsx";
import QuestionModal from "./components/question/QuestionModal.jsx";
import GameOver from "./components/game/GameOver.jsx";
import "./App.css";

function App() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [turn, setTurn] = useState(0);
  const [diceOn, setDiceOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [players, setPlayers] = useState(cloneDeep(playersData));
  const [playerNames, setPlayerNames] = useState([
    { name: "Player 1" },
    { name: "Player 2" },
    { name: "Player 3" },
    { name: "Player 4" },
  ]);

  const numberOfCasts = useRef(3);
  const totalCasts = useRef(3);
  const playerTracks = useRef(cloneDeep(playerTracksData));
  const activeFigure = useRef()
  const dialogRef = useRef();

  function rollDice() {
    let player = players[turn];

    let allHome = player.every(figure => {
      return figure.position == -1;
    })

    setDiceOn(true);

    let diceNum = Math.floor(Math.random() * 6) + 1;
    
    if (allHome && diceNum <= 4) {
      diceNum = Math.floor(Math.random() * 6) + 1;
    }
    setDiceNumber(() => {
      return diceNum;
    });
    numberOfCasts.current--;
    checkEligible(diceNum);
  }

  function checkEligible(diceNum) {
    let player = players[turn];
    let playerTrack = playerTracks.current[turn];

    player.forEach((figure) => {
      let newPosition = figure.position == -1 ? 0 : figure.position + diceNum;
      let isOccupied = playerTrack[newPosition]?.occupied;
      let isOpponent = playerTrack[newPosition]?.occupiedBy.player != turn

      if (figure.position == -1 && diceNum == 6 && (!isOccupied || isOpponent)) {
        figure.eligible = true;
      } 
      else if (figure.position > -1 && newPosition <= 43 && (!isOccupied || isOpponent)) {
        figure.eligible = true;
      }
    });

    let hasEligible = player.some(figure => {
      return figure.eligible
    });

    if (!hasEligible) {
      setTimeout(() => {
        setDiceOn(false);
      }, 1000)
    }

    if (!hasEligible && !numberOfCasts.current) {
      setTimeout(() => {
        setTurn((oldTurn) => {
          let newTurn = oldTurn < 3 ? oldTurn + 1 : 0;
          setTurn(newTurn);

          totalCasts.current = numberOfCasts.current = players[newTurn].every(figure => {
            return figure.position == -1
          }) ? 3 : 1;
        });
      }, 1000)
      return;
    }

    setPlayers((oldPlayersData) => {
      const newPlayersData = [
        ...oldPlayersData.map((player) => {
          return [...player];
        }),
      ];
      return newPlayersData;
    });
  }

  function handleMove(figure) {
    if (figure.eligible) {
      activeFigure.current = figure;
      if (figure.position == -1) {
        moveFigure(figure)
      }
      else {
        openQuestion()
      }
    }
  }

  function openQuestion() {
    dialogRef.current.show();
  }

  function moveFigure(figure) {
    if (figure.eligible) {
      let playerTrack = playerTracks.current[turn];
      let newPosition = figure.position == -1  ? 0 : figure.position + diceNumber;
      let oldPosition = figure.position;
      let isOccupied = playerTrack[newPosition]?.occupied;
      let isOpponent = playerTrack[newPosition]?.occupiedBy.player != turn

      for (let i = 0; i < diceNumber; i++) {
        if (i == diceNumber - 1 || figure.position == -1) {
          setTimeout(() => {
            figure.position = newPosition

            let remove = false;
            let playerToRemove = null;
            let figureToRemove = null;

            if (isOccupied && isOpponent) {
              remove = true;
              playerToRemove = playerTrack[newPosition].occupiedBy.player;
              figureToRemove = playerTrack[newPosition].occupiedBy.figure;
            }

            playerTrack[newPosition].occupied = true;
            playerTrack[newPosition].occupiedBy.player = figure.player;
            playerTrack[newPosition].occupiedBy.figure = figure.figure;

            if (oldPosition > -1) {
              playerTrack[oldPosition].occupied = false;
              playerTrack[oldPosition].occupiedBy.player = null;
              playerTrack[oldPosition].occupiedBy.figure = null;
            }

            setPlayers((oldPlayersData) => {
              const newPlayersData = [...oldPlayersData.map((player) => {
                return [...player];
              })];

              let newX = playerTrack[newPosition].x;
              let newY = playerTrack[newPosition].y;

              figure.x = newX;
              figure.y = newY;

              let figureIndex = figure.figure;
              newPlayersData[turn][figureIndex] = figure;

              if (remove) {
                newPlayersData[playerToRemove][figureToRemove].position = -1;
                newPlayersData[playerToRemove][figureToRemove].x = newPlayersData[playerToRemove][figureToRemove].startingX;
                newPlayersData[playerToRemove][figureToRemove].y = newPlayersData[playerToRemove][figureToRemove].startingY;
              }

              newPlayersData[turn].forEach((figure) => {
                figure.eligible = false;
              });

              return newPlayersData;
            });

            let playerWins = playerTrack.slice(-4).every(position => {
              return position.occupied
            })

            if (playerWins) {
              setGameOver(true);
              return;
            }

            setTimeout(() => {
              setDiceOn(false);
            }, 1000)

            if (diceNumber == 6) {
              totalCasts.current = numberOfCasts.current = 1;
              return;
            }

            setTimeout(() => {
              setTurn((oldTurn) => {
                let newTurn = oldTurn < 3 ? oldTurn + 1 : 0;
                setTurn(newTurn);

                totalCasts.current = numberOfCasts.current = players[newTurn].every(figure => {
                  return figure.position == -1
                }) ? 3 : 1;

              });
            }, 1000)
          }, 800 * i)
          break;
        }
        else {
          setTimeout(() => {
            figure.position = oldPosition + (i + 1);

            setPlayers((oldPlayersData) => {
              const newPlayersData = [...oldPlayersData.map((player) => {
                return [...player];
              })];

              let newX = playerTrack[figure.position].x;
              let newY = playerTrack[figure.position].y;

              figure.x = newX;
              figure.y = newY;

              let figureIndex = figure.figure;
              newPlayersData[turn][figureIndex] = figure;

              newPlayersData[turn].forEach((figure) => {
                figure.eligible = false;
              });

              return newPlayersData;
            });
          }, 800 * i)
        }
      }
    }
  }

  function resetGame() {
    setPlayers(() => {
      return cloneDeep(playersData)
    })

    playerTracks.current = cloneDeep(playerTracksData)

    totalCasts.current = numberOfCasts.current = 3;

    setDiceNumber(1);
    setDiceOn(false);
    setTurn(0)
    setGameOver(false);
  }

  function checkWord(playerWord, wordToGuess) {
    let wordLength = wordToGuess.word.length;

    if (playerWord.slice(0, wordLength).toLowerCase() == wordToGuess.word.toLowerCase()) {
      setTimeout(() => {
        dialogRef.current.close();
        setTimeout(() => {
          moveFigure(activeFigure.current)
        }, 300)
      }, 1000)
      return true;
    }
    else {
      setTimeout(() => {
        dialogRef.current.close();
        setTimeout(() => {
          setPlayers((oldPlayersData) => {
            const newPlayersData = [...oldPlayersData.map((player) => {
              return [...player];
            })];
    
            newPlayersData[turn].forEach((figure) => {
              figure.eligible = false;
            });
    
            return newPlayersData;
          });
          setDiceOn(false);
          
          if (diceNumber == 6) {
            totalCasts.current = numberOfCasts.current = 1;
          }
          else {
            setDiceNumber(1);
            setTurn((oldTurn) => {
              let newTurn = oldTurn < 3 ? oldTurn + 1 : 0;
              setTurn(newTurn);
    
              totalCasts.current = numberOfCasts.current = players[newTurn].every(figure => {
                return figure.position == -1
              }) ? 3 : 1;
            });
          }
        }, 300)
      }, 1000)
      return false;
    }
  }

  return (
    <>
      <div className="lkg-header">
        Ludo knowledge game
      </div>
      <div className="lkg-playerboard">
        {players.map((player, index) => {
          return (
            <PlayerBoard
              key={`playerboard-${index}`}
              team={index}
              turn={turn}
              playerNames={playerNames}
              setPlayerNames={setPlayerNames}
              diceNumber={diceNumber}
              rollDice={rollDice}
              diceOn={diceOn}
              totalCasts={totalCasts}
              numberOfCasts={numberOfCasts}
            />
          )
        })}
      </div>
      {gameOver && (
        <GameOver turn={turn} playerNames={playerNames} resetGame={resetGame} />
      )}
      <div className="lkg-board">
        <QuestionModal
          dialogRef={dialogRef}
          turn={turn}
          playerNames={playerNames}
          diceNumber={diceNumber}
          totalCasts={totalCasts}
          numberOfCasts={numberOfCasts}
          checkWord={checkWord}
        />
        {players.map((player, index) => {
          return (
            <div className="lkg-team" key={`team-${index}`}>
              {player.map((figure, i) => {
                return (
                  <Figure
                    key={`figure-${index}-${i}`}
                    figure={figure}
                    turn={turn}
                    handleMove={handleMove}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
