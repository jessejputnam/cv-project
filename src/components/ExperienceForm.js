import React, { Component } from "react";

class ExperienceForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      company: e.target.companyInput.value,
      position: e.target.positionInput.value,
      tasks: e.target.tasksInput.value
        .trim()
        .split(".")
        .filter((task) => task !== ""),
      dateFrom: e.target.expDateFrom.value,
      dateTo: e.target.expDateTo.value
    };

    this.props.parentCallbackExp(data);

    e.target.companyInput.value = "";
    e.target.positionInput.value = "";
    e.target.tasksInput.value = "";
    e.target.expDateFrom.value = "";
    e.target.expDateTo.value = "";
  };

  render() {
    return (
      <div className='exp__form'>
        <hr />
        <form onSubmit={this.onSubmit}>
          <label>Company: </label>
          <input
            type='text'
            id='companyInput'
            name='companyInput'
            placeholder='Company Name'
          ></input>
          <br />

          <label>Position: </label>
          <input
            type='text'
            id='positionInput'
            name='positionInput'
            placeholder='Senior position'
          ></input>
          <br />

          <div className='maintasks__container'>
            <label>Main Tasks (Separate tasks with period then space): </label>
            <br />
            <input
              type='text'
              name='tasksInput'
              id='tasksInput'
              placeholder='Task 1. Task 2. Task 3'
            ></input>
            <br />
          </div>

          <label>From: </label>
          <input
            type='text'
            name='expDateFrom'
            id='expDateFrom'
            placeholder='June 2011'
          ></input>
          <br />

          <label>To: </label>
          <input
            type='text'
            name='expDateTo'
            id='expDateTo'
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
