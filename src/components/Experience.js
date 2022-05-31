import React, { Component } from "react";
import { DatesList } from "./DatesList";
import uniqid from "uniqid";

class TaskItems extends Component {
  render() {
    const tasksArr = this.props.tasks;
    const taskItems = tasksArr.map((task) => (
      <li className='task__item' key={uniqid()}>
        {task}
      </li>
    ));

    return <ul className='tasks__container'>{taskItems}</ul>;
  }
}

class ExperienceItems extends Component {
  onEdit = (e) => {
    this.props.parentCallbackExpIndexEdit(
      +e.target.parentElement.parentElement.id.slice(8)
    );
  };

  onDel = (e) => {
    this.props.parentCallbackExpIndexDel(
      +e.target.parentElement.parentElement.id.slice(8)
    );
  };

  render() {
    const experienceArr = this.props.experience;
    const experienceListItems = experienceArr.map((item, index) => {
      const id = uniqid();

      return (
        <li id={"expIndex" + index} key={id}>
          <p>
            <strong>Company: </strong>
            {item.company}
          </p>
          <p>
            <strong>Position: </strong>
            {item.position}
          </p>
          <p>
            <strong>Main tasks: </strong>
          </p>
          <TaskItems tasks={item.tasks}></TaskItems>
          <p>
            <strong>Dates of employment: </strong>
            <DatesList dates={item.dates}></DatesList>
          </p>
          <div className='btns__container'>
            <button
              onClick={this.onEdit}
              id={id}
              className='btn__exp--edit'
              type='button'
            >
              Edit
            </button>
            <button
              onClick={this.onDel}
              id={id}
              className='btn__exp--del'
              type='button'
            >
              Delete
            </button>
          </div>
        </li>
      );
    });

    return <ul>{experienceListItems}</ul>;
  }
}

class Experience extends Component {
  render() {
    return (
      <ExperienceItems
        parentCallbackExpIndexEdit={this.props.parentCallbackExpIndexEdit}
        parentCallbackExpIndexDel={this.props.parentCallbackExpIndexDel}
        experience={this.props.experience}
      ></ExperienceItems>
    );
  }
}

export { Experience };
