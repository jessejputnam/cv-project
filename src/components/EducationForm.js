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
      sub: e.target.subInput.value,
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
                <option value='AAS'>AAS</option>
                <option value='AA'>AA</option>
                <option value='AS'>AS</option>
              </optgroup>
              <optgroup label="Bachelor's Degree">
                <option value='BAS'>BAS</option>
                <option value='B.Arch.'>B.Arch.</option>
                <option value='BA'>BA</option>
                <option value='BBA'>BBA</option>
                <option value='BFA'>BFA</option>
                <option value='BS'>BS</option>
              </optgroup>
              <optgroup label="Master's Degree">
                <option value='MBA'>MBA</option>
                <option value='M.Ed.'>M.Ed.</option>
                <option value='MFA'>MFA</option>
                <option value='LL.M.'>LL.M.</option>
                <option value='MPA'>MPA</option>
                <option value='MPH'>MPH</option>
                <option value='MS'>MS</option>
                <option value='MSW'>MSW</option>
              </optgroup>
              <optgroup label='Doctoral Degree'>
                <option value='DBA'>DBA</option>
                <option value='DDS'>DDS</option>
                <option value='Ed.D.'>Ed.D.</option>
                <option value='MD'>MD</option>
                <option value='Ph.D.'>Ph.D.</option>
                <option value='Psy.D'>Psy.D.</option>
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
            <input type='submit' id='submit-educ'></input>
            <button onClick={this.onCancel} type='button' id='cancel-general'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export { EducationForm };
