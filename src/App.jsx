import MainHeader from './components/playerboard/MainHeader.jsx';
import PlayerBoardWrapper from "./components/playerboard/PlayerBoardWrapper.jsx";
import GameWrapper from './components/game/GameWrapper.jsx';
import GameOverWrapper from "./components/game/GameOverWrapper.jsx";
import LudoContextProvider from "./store/contextProvider.jsx";
import "./App.css";

function App() {
  return (
    <>
      <LudoContextProvider>
        <MainHeader/>
        <PlayerBoardWrapper />
        <GameOverWrapper />
        <GameWrapper/>
      </LudoContextProvider>
    </>
  );
}

export default App;
