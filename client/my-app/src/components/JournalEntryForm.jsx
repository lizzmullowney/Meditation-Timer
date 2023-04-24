import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [date, setDate] = useState("");
  const [feeling, setFeeling] = useState("");
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  function handleDateChange(event) {
    setDate(event.target.value)
  }

  const handleFeelingChange = (event) => {
    setFeeling(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    var entryObject = {
      date: date,
      feeling: feeling,
      text: text
    }
    axios.post('http://localhost:1128/journal', entryObject)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log('error in adding journal entry', err)
      })
    setDate("");
    setFeeling("");
    setText("");
    setVisible(false);
  };

  const formStyles = {
    display: visible ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '0.5rem'
  };

  return (
    <>
      <button className="begin-timer" onClick={() => setVisible(true)}>Create Journal Entry</button>
      <section className='form-component' style={formStyles}>
        <header>
          <h2>🪷New Journal Entry🪷</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date" style={labelStyles}>Entry Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange} />
          </div>
          <div>
            <label htmlFor="feeling" style={labelStyles}>How are you feeling?</label>
            <select id="feeling" name="feeling" value={feeling} onChange={handleFeelingChange}>
              <option value="">--Please select an option--</option>
              <option value="calm">🏝 Calm 🏝</option>
              <option value="hopeful"> 🌅 Hopeful 🌅 </option>
              <option value="conflicted"> 🌜 Conflicted🌛</option>
              <option value="anxious"> ⛈ Anxious ⛈</option>
              <option value="overwhelmed"> 🌪 Overwhelmed 🌪</option>
            </select>
          </div>
          <div>
            <label htmlFor="text" style={labelStyles}>Record your thoughts here:</label>
            <textarea id="text" name="text" value={text} onChange={handleTextChange} />
          </div>
          <button type="submit" className="begin-timer">Save Journal Entry</button>
        </form>
      </section>
    </>
  )
};

export default Form;
