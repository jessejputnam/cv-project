import React, { Component } from "react";
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

      /*
      
        <div className='item__header'>
            <h3>
              {item.position.toUpperCase()}
              <span className='small-text'>{item.company}</span>
            </h3>
            <p className='align-txt-right'>
              {item.dates[0]} -
              <br />
              {item.dates[1]}
            </p>
          </div>

      */

      return (
        <li
          className='section-item__container'
          id={"educIndex" + index}
          key={id}
        >
          <div className='item__header--educ'>
            <h3>
              {item.deg} <span>{item.sub}</span>
              <span className='small-text--no-margin'>{item.uni}</span>
            </h3>
            <p className='align-txt-right'>
              {item.dates[0]} -
              <br />
              {item.dates[1]}
            </p>
          </div>
          <div className='btns__container'>
            <button
              onClick={this.onEdit}
              id={id}
              className='btn--cv'
              type='button'
            >
              Edit
            </button>
            <button
              onClick={this.onDel}
              id={id}
              className='btn--cv'
              type='button'
            >
              Delete
            </button>
          </div>
          <div className='expitem__divider'></div>
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
