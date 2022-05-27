import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className='experience__container'>
        <p>
          <strong>Company: </strong>Kennebunk Middle School
        </p>
        <p>
          <strong>Position: </strong>Gifted & Talented ELA Teacher
        </p>
        <p>
          <strong>Main tasks: </strong>
        </p>
        <ul>
          <li>Curriculum creation and implementation</li>
          <li>Daily lesson planning</li>
          <li>Coordination with LA Department and G&T Program</li>
          <li>Keeping gradebook</li>
          <li>Social-Emotional integration and intervention</li>
          <li>Individual and group instruction</li>
        </ul>
        <p>
          <strong>Dates of employment: </strong>Aug 2021 - February 2022
        </p>
        <hr />
      </div>
    );
  }
}

export { Experience };
