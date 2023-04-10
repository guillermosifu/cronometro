import React, { useState, useRef } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import TimerIcon from '@mui/icons-material/Timer';
import "./App.css";

function App2() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTimeElapsed((timeElapsed) => timeElapsed + 10);
    }, 10);
  };

  const handlePause = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setTimeElapsed(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    const milliseconds = (time % 1000).toFixed(0);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}.${milliseconds < 10 ? "0" : ""}${milliseconds}`;
  };

  return (
    <div className="container">
      <h1 className="h1">MANTENIMIENTO</h1>
      <TimerIcon sx={{ fontSize: 90 , color:"#000" }} />
      <div className="timer ">{formatTime(timeElapsed)}</div>
      <div className="buttons">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleStart}
          disabled={isActive}
        >
          <PlayArrowIcon className="play-icon" />
          Iniciar
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePause}
          disabled={!isActive}
        >
          <PauseIcon className="pause-icon" />
          Pausar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          <StopIcon className="stop-icon" />
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default App2;
