import React, { Component } from "react";
import { GeneralInfo } from "./components/General";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { EducationForm } from "./components/EducationForm";
import { GeneralForm } from "./components/GeneralForm";

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
          company: "KHS",
          position: "Admin Specialist",
          tasks: [
            "Meeting with individual students",
            "Assessing and incorporating IEPs to mainstream curriculum",
            "Writing convention assistance"
          ],
          dates: ["Aug 2021", "Feb 2022"]
        }
      ]
    };
  }

  render() {
    return (
      <div className='App'>
        <h1>CV Generator</h1>

        <div className='general__container'>
          <h2 className='general__title'>General Information</h2>
          <GeneralInfo
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            address={this.state.address}
          ></GeneralInfo>
          <button className='btn__general--edit' type='button'>
            Edit
          </button>
          <GeneralForm></GeneralForm>
        </div>

        <hr />

        <div className='education__container'>
          <h2 className='education__title'>Education</h2>
          <Education education={this.state.education}></Education>
        </div>

        <EducationForm></EducationForm>
        <hr />

        <div className='experience__container'>
          <h2 className='section__title experience__title'>Experience </h2>
          <Experience experience={this.state.experience}></Experience>
        </div>
      </div>
    );
  }
}

export default App;
