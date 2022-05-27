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

class EducationItem extends Component {
  render() {
    const educationArr = this.props.education;
    const educationListItems = educationArr.map((item) => {
      return (
        <li key={item} className='education__container'>
          <p>
            <strong>University: </strong>
            {item.uni}
          </p>
          <p>
            <strong>Degree: </strong>
            {item.deg}
          </p>
          <p>
            <strong>Subject: </strong>
            {item.sub}
          </p>
          <p>
            <strong>Dates of Study: </strong>
            <DatesList dates={item.dates}></DatesList>
          </p>
        </li>
      );
    });

    return <ul>{educationListItems}</ul>;
  }
}

class Education extends Component {
  render() {
    return <EducationItem education={this.props.education}></EducationItem>;
  }
}

export { Education };
