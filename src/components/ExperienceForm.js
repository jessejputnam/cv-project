import React from "react";

const ExperienceForm = function (props) {
  const onCancel = () => props.parentCallbackExpCancel(false);

  const onSubmit = (e) => {
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

    props.parentCallbackExp(data);
  };

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div className='form__row'>
          <label>Company: </label>
          <input
            className='text-input'
            type='text'
            id='companyInput'
            name='companyInput'
            placeholder='Company Name'
            defaultValue={props.data === undefined ? "" : props.data.company}
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
            defaultValue={props.data === undefined ? "" : props.data.position}
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
              props.data === undefined ? "" : props.data.tasks.join(". ")
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
            defaultValue={props.data === undefined ? "" : props.data.dates[0]}
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
            defaultValue={props.data === undefined ? "" : props.data.dates[1]}
          ></input>
        </div>

        <div className='form__btn__container'>
          <button onClick={onCancel} type='button' id='cancel-general'>
            Cancel
          </button>
          <input type='submit'></input>
        </div>
      </form>
    </div>
  );
};

export { ExperienceForm };
