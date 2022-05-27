import React, { Component } from "react";

class EducationForm extends Component {
  render() {
    return (
      <div className='educ__form'>
        <hr />
        <form>
          <label>University: </label>
          <input type='text' id='uni-input' name='uni-input'></input>
          <br />

          <label>Degree: </label>
          <select name='deg-select' id='deg-select'>
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
          <input type='text' name='sub-input' id='sub-input'></input>
          <br />

          <label>From: </label>
          <input type='text' name='datefrom-input' id='datefrom-input'></input>
          <br />

          <label>To: </label>
          <input type='text' name='dateto-input' id='dateto-input'></input>
          <br />
        </form>
        <hr />
      </div>
    );
  }
}

export { EducationForm };
