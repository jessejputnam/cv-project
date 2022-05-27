import React, { Component } from "react";
import { DatesList } from "./DatesList";
import uniqid from "uniqid";

class TaskItems extends Component {
  render() {
    const tasksArr = this.props.tasks;
    const taskItems = tasksArr.map((task) => <li key={uniqid()}>{task}</li>);

    return <ul>{taskItems}</ul>;
  }
}

class ExperienceItems extends Component {
  render() {
    const experienceArr = this.props.experience;
    const experienceListItems = experienceArr.map((item) => {
      const id = uniqid();
      return (
        <li key={id}>
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
            <button id={id} className='btn__exp--edit' type='button'>
              Edit
            </button>
            <button id={id} className='btn__exp--del' type='button'>
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
      <ExperienceItems experience={this.props.experience}></ExperienceItems>
    );
  }
}

export { Experience };
