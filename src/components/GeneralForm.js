import React, { Component } from "react";

class GeneralForm extends Component {
  render() {
    return (
      <div className='gen__form'>
        <hr />
        <form>
          <label>Name: </label>
          <input
            type='text'
            id='name-input'
            name='name-input'
            autoComplete='name'
          ></input>
          <br />

          <label>Email: </label>
          <input
            type='email'
            id='email-input'
            name='email-input'
            autoComplete='email'
          ></input>
          <br />

          <label>Phone: </label>
          <input
            type='tel'
            name='tel-input'
            id='tel-input'
            autoComplete='tel'
          ></input>
          <br />

          <label>Street Address: </label>
          <input
            type='text'
            name='street-input'
            id='street-input'
            autoComplete='street-address'
          ></input>
          <br />

          <label>City, State, ZIP: </label>
          <input
            type='text'
            name='city-state-input'
            id='city-state-input'
          ></input>
          <br />
        </form>
        <hr />
      </div>
    );
  }
}

export { GeneralForm };
