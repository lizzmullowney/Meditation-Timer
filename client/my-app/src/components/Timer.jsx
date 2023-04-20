import React, { useState, useEffect } from 'react';

function Timer() {
  const [duration, setDuration] = useState(300);
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(timeRemaining - 1);
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isRunning, timeRemaining]);

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  function handleMinutesChange(event) {
    setMinutes(parseInt(event.target.value));
    setDuration(parseInt(event.target.value) * 60 + seconds);
    setTimeRemaining(parseInt(event.target.value) * 60 + seconds);
  }

  function handleSecondsChange(event) {
    setSeconds(parseInt(event.target.value));
    setDuration(minutes * 60 + parseInt(event.target.value));
    setTimeRemaining(minutes * 60 + parseInt(event.target.value));
  }

  function handleStartClick() {
    setIsRunning(true);
  }

  function handleStopClick() {
    setIsRunning(false);
    setTimeRemaining(duration);
    setMinutes(Math.floor(duration / 60));
    setSeconds(duration % 60);
  }

  return (
    <div className="timer">
      <h1 className="timer-numbers">{formatTime(timeRemaining)}</h1>
      <div>
        <label htmlFor="minutes">Minutes:</label>
        <input type="number" id="minutes" value={minutes} onChange={handleMinutesChange} />
        <label htmlFor="seconds">Seconds:</label>
        <input type="number" id="seconds" value={seconds} onChange={handleSecondsChange} />
      </div>
      {isRunning ? (
        <button onClick={handleStopClick}>Stop</button>
      ) : (
        <button onClick={handleStartClick}>Start</button>
      )}
    </div>
  );
}



export default Timer;