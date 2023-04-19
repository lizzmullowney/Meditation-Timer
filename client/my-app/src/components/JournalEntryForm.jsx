import React, { useState } from 'react';



function Form() {
  //create State variables for pieces of form
  const [date, setDate] = useState("");

  const [feeling, setFeeling] = useState("");

  const [text, setText] = useState("");

  //change handler for date
  function handleDateChange(event) {
    setDate(event.target.value)
  }

  const handleFeelingChange = (event) => {
    setFeeling(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  //submit handler for Form
  function handleSubmit(event) {
    event.preventDefault();
  }
  //create form JSX
  return (
    <section>
      <header>
        <h2>🪷New Journal Entry🪷</h2>
      </header>

      <form onSubmit={handleSubmit}>

        <label htmlFor="date">Entry Date</label>
        <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}/>


      <label htmlFor="feeling">How are you feeling?</label>
      <select id="feeling" name="feeling" value={feeling} onChange={handleFeelingChange}>
        <option value="">--Please select an option--</option>
        <option value="calm">🏝 Calm 🏝</option>
        <option value="hopeful"> 🌅 Hopeful 🌅 </option>
        <option value="conflicted"> 🌜 Conflicted🌛</option>
        <option value="anxious"> ⛈ Anxious ⛈</option>
        <option value="overwhelmed"> 🌪 Overwhelmed 🌪</option>
      </select>

      <label htmlFor="text">Record your thoughts here:</label>
      <textarea id="text" name="text" value={text} onChange={handleTextChange} />

      </form>
    </section>
  )
};

export default Form;