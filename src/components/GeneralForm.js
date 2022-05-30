import React, { Component } from "react";

class GeneralForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    // Gather input data
    const data = {
      name: e.target.nameInput.value,
      email: e.target.emailInput.value,
      tel: e.target.telInput.value,
      street: e.target.streetInput.value,
      city: e.target.cityInput.value
    };

    // Transfer input data to callback for parent
    this.props.parentCallbackGen(data);
  };

  render() {
    return (
      <div className='gen__form'>
        <hr />
        <form onSubmit={this.onSubmit}>
          <label>Name: </label>
          <input
            type='text'
            id='nameInput'
            name='nameInput'
            autoComplete='name'
            placeholder='Stephen Strange'
          ></input>
          <br />

          <label>Email: </label>
          <input
            type='email'
            id='emailInput'
            name='emailOnput'
            autoComplete='email'
            placeholder='strangedoctor@mcu.com'
          ></input>
          <br />

          <label>Phone: </label>
          <input
            type='tel'
            name='telInput'
            id='telInput'
            autoComplete='tel'
            placeholder='(413) 666-3091'
          ></input>
          <br />

          <label>Street Address: </label>
          <input
            type='text'
            name='streetInput'
            id='streetInput'
            autoComplete='street-address'
            placeholder='127 Bleaker St Apt 1'
          ></input>
          <br />

          <label>City, State, ZIP: </label>
          <input
            type='text'
            name='cityInput'
            id='cityInput'
            placeholder='New York, NY 10481'
          ></input>
          <br />

          <input type='submit' id='submit-general'></input>
        </form>
        <hr />
      </div>
    );
  }
}

export { GeneralForm };
