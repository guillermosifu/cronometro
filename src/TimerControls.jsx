import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";

function TimerControls({ isActive, onStart, onPause, onReset }) {
  return (
    <div className="timer-controls">
      <ButtonGroup variant="contained" aria-label="timer-controls">
        <Button
          color="primary"
          startIcon={<PlayArrowIcon />}
          onClick={onStart}
          disabled={isActive}
        >
          Iniciar
        </Button>
        <Button
          color="secondary"
          startIcon={<PauseIcon />}
          onClick={onPause}
          disabled={!isActive}
        >
          Pausar
        </Button>
        <Button
          startIcon={<StopIcon />}
          onClick={onReset}
          disabled={isActive}
        >
          Finalizar
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default TimerControls;
