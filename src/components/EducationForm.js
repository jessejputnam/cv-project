import React, { Component } from "react";

class EducationForm extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     uni: "",
  //     deg: "",
  //     sub: "",
  //     dateFrom: "",
  //     dateTo: ""
  //   };
  // }

  // if ()

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.data);
    const data = {
      uni: e.target.uniInput.value,
      deg: e.target.degSelect.value,
      sub: e.target.subInput.value,
      dateFrom: e.target.educDateFrom.value,
      dateTo: e.target.educDateFrom.value
    };

    this.props.parentCallbackEduc(data);

    e.target.uniInput.value = "";
    e.target.subInput.value = "";
    e.target.educDateFrom.value = "";
    e.target.educDateTo.value = "";
  };

  render() {
    return (
      <div className='educ__form'>
        <hr />
        <form onSubmit={this.onSubmit}>
          <label>University: </label>
          <input
            type='text'
            id='uniInput'
            name='uniInput'
            placeholder='Tufts University'
            defaultValue={
              this.props.data === undefined ? "" : this.props.data.uni
            }
          ></input>
          <br />

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
          <br />

          <label>Subject: </label>
          <input
            type='text'
            name='subInput'
            id='subInput'
            placeholder='Computer Science'
          ></input>
          <br />

          <label>From: </label>
          <input
            type='text'
            name='educDateFrom'
            id='educDateFrom'
            placeholder='Aug 2007'
          ></input>
          <br />

          <label>To: </label>
          <input
            type='text'
            name='educDateTo'
            id='educDateTo'
            placeholder='May 2011'
          ></input>
          <br />

          <input type='submit' id='submit-educ'></input>
        </form>
        <hr />
      </div>
    );
  }
}

export { EducationForm };
