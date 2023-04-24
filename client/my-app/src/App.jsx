import './App.css';
import React from 'react';
import Timer from './components/Timer.jsx'
import Journal from './components/Journal.jsx'


function App() {
  return (
    <div className="App">
       <h1 className="bigTitle">Peaceful Meditation Timer</h1>
      <Timer />
      <Journal />
    </div>
  );
}

export default App;
