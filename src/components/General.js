import React, { Component } from "react";

class AddressLines extends Component {
  render() {
    const addressLineArr = this.props.address;
    const listItems = addressLineArr.map((line) => <li key={line}>{line}</li>);

    return <ul>{listItems}</ul>;
  }
}

class GeneralInfo extends Component {
  render() {
    return (
      <div className='general__container'>
        <p>
          <strong>Name:</strong> {this.props.name}
        </p>
        <p>
          <strong>Email:</strong> {this.props.email}
        </p>
        <p>
          <strong>Phone:</strong> {this.props.phone}
        </p>
        <p>
          <strong>Address:</strong>
        </p>
        <AddressLines address={this.props.address}></AddressLines>
      </div>
    );
  }
}

export { GeneralInfo };
