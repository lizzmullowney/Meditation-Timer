import React, { useState, useEffect } from 'react';
import alarmSound from '../audio/tibetan-bell-sound.mp3'
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
          const audio = new Audio(alarmSound);
          audio.play();
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
    const audio = new Audio(alarmSound);
          audio.play();
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
      <div className="set-timer">

        <h3>Set Timer:</h3>
        <label htmlFor="minutes">Minutes:</label>
        <input type="number" id="minutes" value={minutes} onChange={handleMinutesChange} />
        <label htmlFor="seconds">Seconds:</label>
        <input type="number" id="seconds" value={seconds} onChange={handleSecondsChange} />
      </div>
      <br></br>

      {isRunning ? (
        <button className="begin-timer" onClick={handleStopClick}>End Timer</button>
      ) : (
        <button className="begin-timer" onClick={handleStartClick}>Begin Timer</button>
      )}
    </div>

  );
}



export default Timer;