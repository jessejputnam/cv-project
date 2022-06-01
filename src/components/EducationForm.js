import React, { Component } from "react";

class EducationForm extends Component {
  constructor() {
    super();

    this.state = {
      uni: "",
      deg: "",
      sub: "",
      dateFrom: "",
      dateTo: ""
    };
  }

  onCancel = (e) => {
    this.props.parentCallbackEducCancel(false);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      uni: e.target.uniInput.value,
      deg: e.target.degSelect.value,
      sub: "(" + e.target.subInput.value + ")",
      dateFrom: e.target.educDateFrom.value,
      dateTo: e.target.educDateTo.value
    };

    this.props.parentCallbackEduc(data);
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.onSubmit}>
          <div className='form__row'>
            <label>University: </label>
            <input
              className='text-input'
              type='text'
              id='uniInput'
              name='uniInput'
              placeholder='Tufts University'
              defaultValue={
                this.props.data === undefined ? "" : this.props.data.uni
              }
            ></input>
          </div>

          <div className='form__row'>
            <label>Degree: </label>
            <select name='degSelect' id='degSelect'>
              <optgroup label='Associate Degree'>
                <option value='Associate of Applied Science'>AAS</option>
                <option value='Associate of Arts'>AA</option>
                <option value='Associate of Science'>AS</option>
              </optgroup>
              <optgroup label="Bachelor's Degree">
                <option value='Bachelor of Applied Studies'>BAS</option>
                <option value='Bachelor of Architecture'>B.Arch.</option>
                <option value='Bachelor of Arts'>BA</option>
                <option value='Bachelor of Business Administration'>BBA</option>
                <option value='Bachelor of Fine Arts'>BFA</option>
                <option value='Bachelor of Science'>BS</option>
              </optgroup>
              <optgroup label="Master's Degree">
                <option value='Master of Arts'>MA</option>
                <option value='Master of Business Administration'>MBA</option>
                <option value='Master of Education'>M.Ed.</option>
                <option value='Master of Fine Arts'>MFA</option>
                <option value='Master of Public Administration'>MPA</option>
                <option value='Master of Public Health'>MPH</option>
                <option value='Master of Science'>MS</option>
                <option value='Master of Social Work'>MSW</option>
              </optgroup>
              <optgroup label='Doctoral Degree'>
                <option value='Doctor of Business Administration'>DBA</option>
                <option value='D'>DDS</option>
                <option value='Doctor of Education'>Ed.D.</option>
                <option value='Doctor of Medicine'>MD</option>
                <option value='Doctor of Philosophy'>Ph.D.</option>
                <option value='Doctor of Psychology'>Psy.D.</option>
              </optgroup>
            </select>
          </div>

          <div className='form__row'>
            <label>Subject: </label>
            <input
              className='text-input'
              type='text'
              name='subInput'
              id='subInput'
              placeholder='Computer Science'
              defaultValue={
                this.props.data === undefined ? "" : this.props.data.sub
              }
            ></input>
          </div>

          <div className='form__row'>
            <label>From: </label>
            <input
              className='text-input'
              type='text'
              name='educDateFrom'
              id='educDateFrom'
              placeholder='Aug 2007'
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
              name='educDateTo'
              id='educDateTo'
              placeholder='May 2011'
              defaultValue={
                this.props.data === undefined ? "" : this.props.data.dates[1]
              }
            ></input>
          </div>

          <div className='form__btn__container'>
            <button onClick={this.onCancel} type='button' id='cancel-general'>
              Cancel
            </button>
            <input type='submit' id='submit-educ'></input>
          </div>
        </form>
      </div>
    );
  }
}

export { EducationForm };
