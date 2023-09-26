import "./app.css";
import LandingPage from "./components/LandingPage";
import GamePage from "./components/GamePage";
import { useState } from "react";

function App() {
  const [enterGame, setEnterGame] = useState(false);

  const startGame = () => {
    setEnterGame(true);
  };

  return (
    <div>
      {enterGame === true ? (
        <GamePage />
      ) : (
        <LandingPage gameStart={startGame} />
      )}
    </div>
  );
}

export default App;
