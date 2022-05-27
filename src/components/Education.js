import React, { Component } from "react";
import { DatesList } from "./DatesList";
import uniqid from "uniqid";

class EducationItem extends Component {
  render() {
    const educationArr = this.props.education;
    const educationListItems = educationArr.map((item) => {
      const id = uniqid();
      return (
        <li key={id}>
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
          <div className='btns__container'>
            <button id={id} className='btn__educ--edit' type='button'>
              Edit
            </button>
            <button id={id} className='btn__educ--del' type='button'>
              Delete
            </button>
          </div>
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
