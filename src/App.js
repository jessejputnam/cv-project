import React, { Component } from "react";
import { GeneralInfo } from "./components/General";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { EducationForm } from "./components/EducationForm";
import { GeneralForm } from "./components/GeneralForm";
import { ExperienceForm } from "./components/ExperienceForm";

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
          uni: "a",
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
    console.log(this.state.education);
    // If one education at least already filled out
    if (this.state.education.length > 1) {
      // Shallow copy of prev education array minus latest addition yet to be filled
      const prevEduc = this.state.education.slice(
        0,
        this.state.education.length - 1
      );

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

        <ExperienceForm></ExperienceForm>
      </div>
    );
  }
}

export default App;
