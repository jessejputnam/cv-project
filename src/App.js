import React, { Component } from "react";
import { GeneralInfo } from "./components/General";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { EducationForm } from "./components/EducationForm";
import { GeneralForm } from "./components/GeneralForm";
import { ExperienceForm } from "./components/ExperienceForm";

const copyPrevArr = (object, array) => {
  return object.state[array].slice(0, object.state[array].length - 1);
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      address: [""],

      education: [
        {
          uni: "",
          deg: "",
          sub: "",
          dates: [""]
        }
      ],

      experience: [
        {
          company: "",
          position: "",
          tasks: [""],
          dates: [""]
        }
      ]
    };
  }

  handleCallbackGen = (childData) => {
    this.setState({
      name: childData.name,
      email: childData.email,
      phone: childData.tel,
      address: [childData.street, childData.city]
    });
  };

  handleCallbackEduc = (childData) => {
    // If one education at least already filled out
    if (this.state.education.length > 1) {
      // Shallow copy of prev education array minus latest addition yet to be filled
      const prevEduc = copyPrevArr(this, "education");

      this.setState({
        education: [
          ...prevEduc,
          {
            uni: childData.uni,
            deg: childData.deg,
            sub: childData.sub,
            dates: [childData.dateFrom, childData.dateTo]
          }
        ]
      });
    } else {
      this.setState({
        education: [
          {
            uni: childData.uni,
            deg: childData.deg,
            sub: childData.sub,
            dates: [childData.dateFrom, childData.dateTo]
          }
        ]
      });
    }
  };

  handleCallbackExp = (childData) => {
    // If one experience at least already filled out
    if (this.state.experience.length > 1) {
      // Shallow copy of prev experience array minus latest addition yet to be filled
      const prevExp = copyPrevArr(this, "experience");

      this.setState({
        experience: [
          ...prevExp,
          {
            company: childData.company,
            position: childData.position,
            tasks: childData.tasks,
            dates: [childData.dateFrom, childData.dateTo]
          }
        ]
      });
    } else {
      this.setState({
        experience: [
          {
            company: childData.company,
            position: childData.position,
            tasks: childData.tasks,
            dates: [childData.dateFrom, childData.dateTo]
          }
        ]
      });
    }
  };

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

          <GeneralForm parentCallbackGen={this.handleCallbackGen}></GeneralForm>
        </div>

        <hr />

        <div className='education__container'>
          <div className='education__title__container'>
            <h2 className='education__title'>Education</h2>
            <button type='button' id='educ__add'>
              Add Education
            </button>
          </div>
          <Education education={this.state.education}></Education>
        </div>

        <EducationForm
          parentCallbackEduc={this.handleCallbackEduc}
        ></EducationForm>
        <hr />

        <div className='experience__container'>
          <div className='experience__title__container'>
            <h2 className='section__title experience__title'>Experience </h2>
            <button type='button' id='exp__add'>
              Add Experience
            </button>
          </div>
          <Experience experience={this.state.experience}></Experience>
        </div>

        <ExperienceForm
          parentCallbackExp={this.handleCallbackExp}
        ></ExperienceForm>
      </div>
    );
  }
}

export default App;
