import React, { Component } from "react";
import { DatesList } from "./DatesList";
import uniqid from "uniqid";

class EducationItem extends Component {
  onEdit = (e) => {
    this.props.parentCallbackEducIndexEdit(
      +e.target.parentElement.parentElement.id.slice(9)
    );
  };

  onDel = (e) => {
    this.props.parentCallbackEducIndexDel(
      +e.target.parentElement.parentElement.id.slice(9)
    );
  };

  render() {
    const educationArr = this.props.education;
    const educationListItems = educationArr.map((item, index) => {
      const id = uniqid();

      return (
        <li id={"educIndex" + index} key={id}>
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
            <button
              onClick={this.onEdit}
              id={id}
              className='btn__educ--edit'
              type='button'
            >
              Edit
            </button>
            <button
              onClick={this.onDel}
              id={id}
              className='btn__educ--del'
              type='button'
            >
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
    return (
      <EducationItem
        parentCallbackEducIndexEdit={this.props.parentCallbackEducIndexEdit}
        parentCallbackEducIndexDel={this.props.parentCallbackEducIndexDel}
        education={this.props.education}
      ></EducationItem>
    );
  }
}

export { Education };
