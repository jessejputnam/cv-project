import React, { Component } from "react";
import { GeneralInfo } from "./components/General";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jesse Putnam",
      email: "jessejputnam@gmail.com",
      phone: "(413) 345-9049",
      address: ["24 Crooked Hill Rd", "Alford, MA 01230"],

      education: [
        {
          uni: "University of Massachusetts Amherst",
          deg: "Bachelor's Degree",
          sub: "English Lit / Classics",
          dates: ["Aug 2007", "May 2012"]
        }
      ],

      experience: [
        {
          company: "Kennebunk Middle School",
          position: "Gifted & Talented LA Teacher",
          tasks: [
            "Curriculum creation",
            "Daily lesson planning",
            "Keeping gradebook"
          ],
          dates: ["Aug 2021", "[Feb 2022]"]
        }
      ]
    };
  }

  render() {
    // const educationArr = this.state.education;
    // const educationListItems = educationArr.map((item) => <li></li>);

    return (
      <div className='App'>
        <h1>CV Generator</h1>
        <h2 className='general__title'>General Information</h2>
        <GeneralInfo
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          address={this.state.address}
        ></GeneralInfo>
        <hr />
        <h2 className='education__title'>Education</h2>
        <Education education={this.state.education}></Education>
        <hr />
        <h2 className='section__title experience__title'>Experience </h2>
        <ul>
          <li>
            <Experience></Experience>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
