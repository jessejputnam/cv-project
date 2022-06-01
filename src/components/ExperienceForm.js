import React, { Component } from "react";

class ExperienceForm extends Component {
  constructor() {
    super();

    this.state = {
      company: "",
      position: "",
      tasks: [""],
      dateFrom: "",
      dateTo: ""
    };
  }

  onCancel = (e) => {
    this.props.parentCallbackExpCancel(false);
  };

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
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.onSubmit}>
          <div className='form__row'>
            <label>Company: </label>
            <input
              className='text-input'
              type='text'
              id='companyInput'
              name='companyInput'
              placeholder='Company Name'
              defaultValue={
                this.props.data === undefined ? "" : this.props.data.company
              }
            ></input>
          </div>

          <div className='form__row'>
            <label>Position: </label>
            <input
              className='text-input'
              type='text'
              id='positionInput'
              name='positionInput'
              placeholder='Senior position'
              defaultValue={
                this.props.data === undefined ? "" : this.props.data.position
              }
            ></input>
          </div>

          <div className='form__row form__row--tasks'>
            <label>
              Main Tasks:
              <br />
              <span className='small-text'>Separate with periods</span>
            </label>
            <input
              className='text-input'
              type='text'
              name='tasksInput'
              id='tasksInput'
              placeholder='Task 1. Task 2. Task 3'
              defaultValue={
                this.props.data === undefined
                  ? ""
                  : this.props.data.tasks.join(". ")
              }
            ></input>
          </div>

          <div className='form__row'>
            <label>From: </label>
            <input
              className='text-input'
              type='text'
              name='expDateFrom'
              id='expDateFrom'
              placeholder='June 2011'
              defaultValue={
                this.props.data === undefined ? "" : this.props.data.dates[0]
              }
            ></input>
          </div>

          <div className='form__row'>
            <label>To: </label>
            <input
              className='text-input'
              type='text'
              name='expDateTo'
              id='expDateTo'
              placeholder='Present'
              defaultValue={
                this.props.data === undefined ? "" : this.props.data.dates[1]
              }
            ></input>
          </div>

          <div className='form__btn__container'>
            <input type='submit'></input>
            <button onClick={this.onCancel} type='button' id='cancel-general'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export { ExperienceForm };
