import React, { Component } from "react";

class GeneralForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.data.name,
      email: props.data.email,
      tel: props.data.tel,
      street: props.data.address[0],
      city: props.data.address[1]
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeTel = this.handleChangeTel.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();

    // Transfer input data to callback for parent
    this.props.parentCallbackGen(this.state);
  };

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangeTel(e) {
    this.setState({ tel: e.target.value });
  }

  handleChangeStreet(e) {
    this.setState({ street: e.target.value });
  }

  handleChangeCity(e) {
    this.setState({ city: e.target.value });
  }

  render() {
    return (
      <div className='gen__form'>
        <hr />
        <form onSubmit={this.onSubmit}>
          <label>Name: </label>
          <input
            type='text'
            name='nameInput'
            autoComplete='name'
            placeholder='Doctor Strange'
            onChange={this.handleChangeName}
            value={this.state.name}
          ></input>
          <br />

          <label>Email: </label>
          <input
            type='email'
            name='emailOnput'
            autoComplete='email'
            placeholder='strangedoctor@mcu.com'
            onChange={this.handleChangeEmail}
            value={this.state.email}
          ></input>
          <br />

          <label>Phone: </label>
          <input
            type='tel'
            name='telInput'
            autoComplete='tel'
            placeholder='(413) 666-3091'
            onChange={this.handleChangeTel}
            value={this.state.tel}
          ></input>
          <br />

          <label>Street Address: </label>
          <input
            type='text'
            name='streetInput'
            autoComplete='street-address'
            placeholder='127 Bleaker St Apt 1'
            onChange={this.handleChangeStreet}
            value={this.state.street}
          ></input>
          <br />

          <label>City, State, ZIP: </label>
          <input
            type='text'
            name='cityInput'
            id='cityInput'
            placeholder='New York, NY 10481'
            onChange={this.handleChangeCity}
            value={this.state.city}
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
