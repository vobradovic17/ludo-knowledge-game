import { useState, useRef } from "react";
import { playersData, playerTracksData } from "../data.js";
import { words } from '../words.js'
import { cloneDeep, shuffle } from 'lodash-es'
import { LudoContext } from "./context"

export default function LudoContextProvider({ children }) {
    const [players, setPlayers] = useState(cloneDeep(playersData));
    const [diceNumber, setDiceNumber] = useState(1);
    const [diceDisabled, setDiceDisabled] = useState(false);
    const [wordToGuess, setWordToGuess] = useState(words[0])
    const [timerOn, setTimerOn] = useState(false)
    const [turn, setTurn] = useState(0);
    const [gameOver, setGameOver] = useState(false)
    const [playerNames, setPlayerNames] = useState([
        { name: "Player 1" },
        { name: "Player 2" },
        { name: "Player 3" },
        { name: "Player 4" },
    ]);

    const playerTracks = useRef(cloneDeep(playerTracksData));
    const activeFigure = useRef();
    const numberOfCasts = useRef(3);
    const totalCasts = useRef(3);
    const wordsToGuess = useRef(shuffle(words))
    const dialogRef = useRef();

    function rollDice() {
      let player = players[turn];

      let allHome = player.every((figure) => {
        return figure.position == -1;
      });

      setDiceDisabled(true);

      let diceNum = getDiceNumber();

      if (allHome && diceNum <= 4) {
        diceNum = getDiceNumber();
      }
      setDiceNumber(diceNum);
      numberOfCasts.current--;
      checkEligibleFigures(diceNum);
    }

    function getDiceNumber() {
      return Math.floor(Math.random() * 6) + 1;
    }

    function checkEligibleFigures(diceNum) {
      let player = players[turn];
      let playerTrack = playerTracks.current[turn];

      player.forEach((figure) => {
        let newPosition = figure.position == -1 ? 0 : figure.position + diceNum;
        let isOccupied = playerTrack[newPosition]?.occupied;
        let isOpponent = playerTrack[newPosition]?.occupiedBy.player != turn;

        if (
          figure.position == -1 &&
          diceNum == 6 &&
          (!isOccupied || isOpponent)
        ) {
          figure.eligible = true;
        } else if (
          figure.position > -1 &&
          newPosition <= 43 &&
          (!isOccupied || isOpponent)
        ) {
          figure.eligible = true;
        }
      });

      let hasEligible = player.some((figure) => {
        return figure.eligible;
      });

      if (!hasEligible) {
        setTimeout(() => {
          setDiceDisabled(false);
        }, 1000);
      }

      if (!hasEligible && !numberOfCasts.current) {
        setTimeout(() => {
          nextTurn();
        }, 1000);
        return;
      }

      if (hasEligible) {
        setPlayers((oldPlayersData) => {
          const newPlayersData = [
            ...oldPlayersData.map((player) => {
              return [...player];
            }),
          ];
          return newPlayersData;
        });
      }
    }

    function nextTurn() {
      setTurn((oldTurn) => {
        let newTurn = oldTurn < 3 ? oldTurn + 1 : 0;
        setTurn(newTurn);

        totalCasts.current = numberOfCasts.current = players[newTurn].every(
          (figure) => {
            return figure.position == -1;
          },
        )
          ? 3
          : 1;
      });
    }

    function handleMove(figure) {
      if (figure.eligible) {
        activeFigure.current = figure;
        if (figure.position == -1 || figure.position >= 40) {
          moveFigure(figure);
        } else {
          openQuestion();
        }
      }
    }

    function moveFigure(figure) {
      if (figure.eligible) {
        let playerTrack = playerTracks.current[turn];
        let newPosition =
          figure.position == -1 ? 0 : figure.position + diceNumber;
        let oldPosition = figure.position;
        let isOccupied = playerTrack[newPosition]?.occupied;
        let isOpponent = playerTrack[newPosition]?.occupiedBy.player != turn;

        for (let i = 0; i < diceNumber; i++) {
          // figure move to final position in a dice cast or initial move from starting position to track
          if (i == diceNumber - 1 || figure.position == -1) {
            setTimeout(() => {
              figure.position = newPosition;

              let remove = false;
              let playerToRemove = null;
              let figureToRemove = null;

              // check if new position is occupied by opponent
              if (isOccupied && isOpponent) {
                remove = true;
                playerToRemove = playerTrack[newPosition].occupiedBy.player;
                figureToRemove = playerTrack[newPosition].occupiedBy.figure;
              }

              // set new player position on track
              playerTrack[newPosition].occupied = true;
              playerTrack[newPosition].occupiedBy.player = figure.player;
              playerTrack[newPosition].occupiedBy.figure = figure.figure;

              // remove old player position on track
              if (oldPosition > -1) {
                playerTrack[oldPosition].occupied = false;
                playerTrack[oldPosition].occupiedBy.player = null;
                playerTrack[oldPosition].occupiedBy.figure = null;
              }

              // update player data
              setPlayers((oldPlayersData) => {
                const newPlayersData = [
                  ...oldPlayersData.map((player) => {
                    return [...player];
                  }),
                ];

                clearEligible(newPlayersData[turn]);

                // move figure to next position
                let newX = playerTrack[newPosition].x;
                let newY = playerTrack[newPosition].y;

                figure.x = newX;
                figure.y = newY;

                let figureIndex = figure.figure;
                newPlayersData[turn][figureIndex] = figure;

                // move opponent figure to starting position
                if (remove) {
                  newPlayersData[playerToRemove][figureToRemove].position = -1;
                  newPlayersData[playerToRemove][figureToRemove].x =
                    newPlayersData[playerToRemove][figureToRemove].startingX;
                  newPlayersData[playerToRemove][figureToRemove].y =
                    newPlayersData[playerToRemove][figureToRemove].startingY;
                }

                return newPlayersData;
              });

              // check if all player figures are on finishing positions
              let playerWins = playerTrack.slice(-4).every((position) => {
                return position.occupied;
              });

              if (playerWins) {
                setGameOver(true);
                return;
              }

              setTimeout(() => {
                setDiceDisabled(false);
              }, 1000);

              if (diceNumber == 6) {
                castAgain();
                return;
              }

              setTimeout(() => {
                nextTurn();
              }, 1000);
            }, 800 * i);
            break;
          }
          // figure move by position before final position
          else {
            setTimeout(() => {
              figure.position = oldPosition + (i + 1);

              // update player data
              setPlayers((oldPlayersData) => {
                const newPlayersData = [
                  ...oldPlayersData.map((player) => {
                    return [...player];
                  }),
                ];

                clearEligible(newPlayersData[turn]);

                // move figure to next position
                let newX = playerTrack[figure.position].x;
                let newY = playerTrack[figure.position].y;

                figure.x = newX;
                figure.y = newY;

                let figureIndex = figure.figure;
                newPlayersData[turn][figureIndex] = figure;

                return newPlayersData;
              });
            }, 800 * i);
          }
        }
      }
    }

    function clearEligible(playerData) {
      playerData.forEach((figure) => {
        figure.eligible = false;
      });
    }

    function castAgain() {
      totalCasts.current = numberOfCasts.current = 1;
    }

    function openQuestion() {
      setWordToGuess(getWordToGuess());
      openDialog();
      setTimerOn(true);
    }

    function getWordToGuess() {
      let wordLengthData = {
        1: [3, 4, 5],
        2: [5, 6],
        3: [6, 7],
        4: [7, 8],
        5: [8, 9],
        6: [9, 10, 11],
      };

      let wordLength = wordLengthData[diceNumber];

      let wordsToGuessIndex = wordsToGuess.current.findIndex((item) => {
        return wordLength.includes(item.word.length);
      });

      let word = wordsToGuess.current[wordsToGuessIndex];

      wordsToGuess.current.splice(wordsToGuessIndex, 1);
      wordsToGuess.current.push(word);

      return word;
    }

    function openDialog() {
      dialogRef.current.show();
    }

    function closeDialog() {
      dialogRef.current.close();
    }

    function checkWord(playerWord, wordToGuess) {
      let wordLength = wordToGuess.word.length;
      let playerAnswer = playerWord.slice(0, wordLength).toLowerCase();
      let correctAnswer = wordToGuess.word.toLowerCase();

      if (playerAnswer == correctAnswer) {
        setTimeout(() => {
          closeDialog();
          setTimerOn(false);
          setTimeout(() => {
            moveFigure(activeFigure.current);
          }, 300);
        }, 1000);
        return true;
      } else {
        setTimeout(() => {
          closeDialog();
          setTimerOn(false);
          setTimeout(() => {
            setPlayers((oldPlayersData) => {
              const newPlayersData = [
                ...oldPlayersData.map((player) => {
                  return [...player];
                }),
              ];

              clearEligible(newPlayersData[turn]);

              return newPlayersData;
            });
            setDiceDisabled(false);

            if (diceNumber == 6) {
              castAgain();
            } else {
              setDiceNumber(1);
              nextTurn();
            }
          }, 300);
        }, 1000);
        return false;
      }
    }

    function resetGame() {
      setPlayers(() => {
        return cloneDeep(playersData);
      });

      playerTracks.current = cloneDeep(playerTracksData);

      totalCasts.current = numberOfCasts.current = 3;

      setDiceNumber(1);
      setDiceDisabled(false);
      setTurn(0);
      setGameOver(false);
    }

    const contextData = {
      players,
      setPlayers,
      diceNumber,
      setDiceNumber,
      diceDisabled,
      setDiceDisabled,
      wordToGuess,
      timerOn,
      turn,
      setTurn,
      gameOver,
      setGameOver,
      playerNames,
      setPlayerNames,
      playerTracks,
      numberOfCasts,
      totalCasts,
      dialogRef,
      rollDice,
      checkEligibleFigures,
      nextTurn,
      handleMove,
      checkWord,
      resetGame,
    };

    return <LudoContext value={contextData}>{ children }</LudoContext>
}