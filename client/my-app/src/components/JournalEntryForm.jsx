import React, { useState } from 'react';



function Form() {
  //create State variables for pieces of form
  const [date, setDate] = useState("");

  //change handler for date
  function handleDateChange(date) {
    setDate(date);
  }
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
       {/* Allow user to enter date */}
        <label htmlFor="date">Entry Date</label>
        <input type="date" id="date" name="date" value={date} />


      </form>
    </section>
  )
};

export default Form;