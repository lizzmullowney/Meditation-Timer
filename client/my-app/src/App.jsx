import './App.css';
import React from 'react';
import Timer from './components/Timer.jsx'
import Form from './components/JournalEntryForm.jsx'


function App() {
  return (
    <div className="App">
       <h1 className="bigTitle">Peaceful Meditation Hub</h1>
      <Timer />
      <Form />
    </div>
  );
}

export default App;
