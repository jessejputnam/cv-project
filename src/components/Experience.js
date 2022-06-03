import React from "react";
import uniqid from "uniqid";

const TaskItems = function (props) {
  const tasksArr = props.tasks;
  const taskItems = tasksArr.map((task) => (
    <li className='task__item' key={uniqid()}>
      {task}
    </li>
  ));

  return <ul className='tasks__container'>{taskItems}</ul>;
};

const ExperienceItems = function (props) {
  const onEdit = (e) =>
    props.parentCallbackExpIndexEdit(
      +e.target.parentElement.parentElement.id.slice(8)
    );
  const onDel = (e) =>
    props.parentCallbackExpIndexDel(
      +e.target.parentElement.parentElement.id.slice(8)
    );
  const experienceArr = props.experience;

  const experienceListItems = experienceArr.map((item, index) => {
    const id = uniqid();

    return (
      <li className='section-item__container' id={"expIndex" + index} key={id}>
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
          <button onClick={onEdit} id={id} className='btn--cv' type='button'>
            Edit
          </button>
          <button onClick={onDel} id={id} className='btn--cv' type='button'>
            Delete
          </button>
        </div>
        <div className='expitem__divider'></div>
      </li>
    );
  });

  return <ul>{experienceListItems}</ul>;
};

const Experience = function (props) {
  return (
    <ExperienceItems
      parentCallbackExpIndexEdit={props.parentCallbackExpIndexEdit}
      parentCallbackExpIndexDel={props.parentCallbackExpIndexDel}
      experience={props.experience}
    ></ExperienceItems>
  );
};

export { Experience };
