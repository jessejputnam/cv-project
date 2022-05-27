import React, { Component } from "react";

class DatesList extends Component {
  render() {
    const datesArr = this.props.dates;

    return (
      <span>
        {datesArr[0]} - {datesArr[1]}
      </span>
    );
  }
}

export { DatesList };
