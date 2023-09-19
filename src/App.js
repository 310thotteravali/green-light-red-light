import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import GreenLightRedLight from "./components/GreenLightRedLight";
import Leaderboard from "./components/Leaderboard";
import "./App.css";
function App() {
  const initialScores = [
    { id: 1, name: "Player 1", score: 100 },
    { id: 2, name: "Player 2", score: 85 },
    { id: 3, name: "Player 3", score: 72 },
  ];
  const [scores] = useState(initialScores);

  const [userData, setUserData] = useState(null);

  const handleRegistrationComplete = (data) => {
    setUserData(data);
  };

  return (
    <div className="App">
      {userData ? (
        <div>
          <h2>Welcome, {userData.name}!</h2>
          <GreenLightRedLight difficulty={userData.difficulty} />
        </div>
      ) : (
        <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />
      )}
      <Leaderboard scores={scores} />
    </div>
  );
}

export default App;
