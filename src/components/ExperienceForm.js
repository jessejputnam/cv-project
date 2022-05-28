import React, { Component } from "react";

class ExperienceForm extends Component {
  render() {
    return (
      <div className='exp__form'>
        <hr />
        <form>
          <label>Company: </label>
          <input
            type='text'
            id='company-input'
            name='company-input'
            placeholder='Company Name'
          ></input>
          <br />

          <label>Position: </label>
          <input
            type='text'
            id='position-input'
            name='position-input'
            placeholder='Senior position'
          ></input>
          <br />

          <div className='maintasks__container'>
            <label>Main Tasks (Separate tasks with period then space): </label>
            <br />
            <input
              type='text'
              name='task-input'
              id='task-input'
              placeholder='Task 1. Task 2. Task 3'
            ></input>
            <br />
          </div>

          <label>From: </label>
          <input
            type='text'
            name='exp-datefrom-input'
            id='exp-datefrom-input'
            placeholder='June 2011'
          ></input>
          <br />

          <label>To: </label>
          <input
            type='text'
            name='exp-dateto-input'
            id='exp-dateto-input'
            placeholder='Present'
          ></input>
          <br />

          <input type='submit' id='submit-exp'></input>
        </form>
        <hr />
      </div>
    );
  }
}

export { ExperienceForm };
