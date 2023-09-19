import React, { useState, useEffect } from "react";

function GreenLightRedLight({ difficulty }) {
  const [boxColor, setBoxColor] = useState("red");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const n = difficulty === "easy" ? 10 : difficulty === "medium" ? 15 : 25;
  const y = 40; // seconds

  useEffect(() => {
    let timer;

    // Function to change the box color
    const changeBoxColor = () => {
      setBoxColor((prevColor) => (prevColor === "green" ? "red" : "green"));
    };

    // Initial color change when the component mounts
    changeBoxColor();

    if (!gameOver) {
      timer = setInterval(
        changeBoxColor,
        Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000
      ); // Random time between 1 to 2 seconds
    }

    return () => {
      clearInterval(timer);
    };
  }, [gameOver]);

  useEffect(() => {
    const gameTimer = setTimeout(() => {
      setGameOver(true);
    }, y * 1000);

    if (score === n) {
      clearTimeout(gameTimer);
    }

    return () => {
      clearTimeout(gameTimer);
    };
  }, [score, n]);

  const handleBoxClick = () => {
    if (boxColor === "green" && !gameOver) {
      setScore((prevScore) => prevScore + 1);
      setBoxColor("red"); // Change the box color after a successful click
    }
  };

  return (
    <div>
      <h2>Green Light Red Light Game</h2>
      <div className={`box ${boxColor}`} onClick={handleBoxClick}></div>
      <p>Score: {score}</p>
      {gameOver && <p className="game-over">Game Over!</p>}
      {score === n && <p className="win-message">You Win!</p>}
    </div>
  );
}

export default GreenLightRedLight;
