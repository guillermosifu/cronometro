import React, { useState, useRef } from "react";
import TimerControls from "./TimerControls";
// import { Button } from "@mui/material";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import PauseIcon from "@mui/icons-material/Pause";
// import StopIcon from "@mui/icons-material/Stop";

function Timer() {
  const [duration, setDuration] = useState(60);
  const [timeRemaining, setTimeRemaining] = useState(duration * 1000);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1000);
    }, 1000);
  };

  const handlePause = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setTimeRemaining(duration * 1000);
  };

  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value);
    setDuration(newDuration);
    setTimeRemaining(newDuration * 1000);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="timer">
      <div className="timer-display">
        <div className="timer-label">Tiempo restante:</div>
        <div className="timer-remaining">{formatTime(timeRemaining)}</div>
        <input
          type="number"
          min="1"
          max="60"
          value={duration}
          onChange={handleDurationChange}
        />
        <div className="timer-label">minutos</div>
      </div>
      <TimerControls
        isActive={isActive}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />
    </div>
  );
}

export default Timer;
