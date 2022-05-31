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
        <p>{this.props.data.name}</p>
        <p>{this.props.data.email}</p>
        <p>{this.props.data.tel}</p>
        <AddressLines address={this.props.data.address}></AddressLines>
      </div>
    );
  }
}

export { GeneralInfo };
