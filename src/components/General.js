import React, { Component } from "react";
import uniqid from "uniqid";

class AddressLines extends Component {
  render() {
    const addressLineArr = this.props.address;
    const listItems = addressLineArr.map((line) => (
      <li key={uniqid()}>{line}</li>
    ));

    return <ul>{listItems}</ul>;
  }
}

class GeneralInfo extends Component {
  render() {
    return (
      <div>
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
