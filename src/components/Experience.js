import React, { Component } from "react";
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
        <li
          className='section-item__container'
          id={"expIndex" + index}
          key={id}
        >
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
          <TaskItems tasks={item.tasks}></TaskItems>
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
