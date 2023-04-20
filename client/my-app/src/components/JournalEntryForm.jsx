import React, { useState } from 'react';
//require axios so I can send journal entry to server/db
import axios from 'axios';


function Form() {
  //create State variables for pieces of form
  const [date, setDate] = useState("");

  const [feeling, setFeeling] = useState("");

  const [text, setText] = useState("");

  //================================================
  //TO DO??
  //create State variable for if the form shows up or not
  const [visible, setVisible] = useState('false');


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
    //create object to send to DB

    var entryObject = {
      date: date,
      feeling: feeling,
      text: text
    }


    //make an axios call here to save the jounral entry to the db require axios up at the top
  axios.post('http://localhost:1128/journal', entryObject)
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) =>{
    console.log('error in adding journal entry', err)
  })

    console.log('This will bean example of a journal entry', entryObject);

    //reset form fields so it looks nice when you save
    setDate("");
    setFeeling("");
    setText("");

    //=================
    //to do hide form
  };


  //do conditional rendering for if the form shows up or not, consider using react modal

  //create form JSX
  return (
    <section className='form-component'>
      <header>
        <h2>🪷New Journal Entry🪷</h2>
      </header>
      <div>
      <form onSubmit={handleSubmit}>
       <div>
        <label htmlFor="date">Entry Date</label>
        <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}/>
      </div>
      <div>
      <label htmlFor="feeling">How are you feeling?</label>


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
      <label htmlFor="text">Record your thoughts here:</label>
      <textarea id="text" name="text" value={text} onChange={handleTextChange} />
      </div>
      <input type="submit" value="Save Journal Entry" />
      </form>
      </div>
    </section>
  )
};

export default Form;