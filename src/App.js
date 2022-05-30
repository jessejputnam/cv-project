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

      education: [],
      educEditIndex: 0,

      experience: [],
      expEditIndex: 0
    };
  }

  // Opening general info edit form
  openGenEditMenu = (e) => {
    console.log(e.target);
  };

  // Handling General Form submission
  handleCallbackGen = (childData) => {
    this.setState({
      name: childData.name,
      email: childData.email,
      phone: childData.tel,
      address: [childData.street, childData.city]
    });
  };

  // Handling Education Form submission
  handleCallbackEduc = (childData) => {
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
  };

  // Handling Experience form submission
  handleCallbackExp = (childData) => {
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
  };

  // Handle Adding education experience
  handleAddEduc = () => {
    const prevEduc = this.state.education;
    const educIndex = prevEduc.length;

    this.setState({
      education: [
        ...prevEduc,
        {
          uni: "",
          deg: "",
          sub: "",
          dates: [""]
        }
      ],
      educEditIndex: educIndex
    });
  };

  // Handle Adding work experience
  handleAddExp = () => {
    const prevExp = this.state.experience;

    this.setState({
      experience: [
        ...prevExp,
        {
          company: "",
          position: "",
          tasks: [""],
          dates: [""]
        }
      ]
    });

    console.log(this.state.experience[0]);
  };

  // Handle Edit Education
  handleEditEduc = (index) => {
    this.setState({
      educEditIndex: index
    });
    console.log(this.state);
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
          <button
            onClick={this.openGenEditMenu}
            className='btn__general--edit'
            type='button'
          >
            Edit
          </button>

          <GeneralForm parentCallbackGen={this.handleCallbackGen}></GeneralForm>
        </div>

        <hr />

        <div className='education__container'>
          <div className='education__title__container'>
            <h2 className='education__title'>Education</h2>
            <button onClick={this.handleAddEduc} type='button' id='educ__add'>
              Add Education
            </button>
          </div>
          <Education
            parentCallbackEducIndex={this.handleEditEduc}
            education={this.state.education}
          ></Education>
        </div>

        <EducationForm
          data={this.state.education[this.state.educEditIndex]}
          parentCallbackEduc={this.handleCallbackEduc}
        ></EducationForm>
        <hr />

        <div className='experience__container'>
          <div className='experience__title__container'>
            <h2 className='section__title experience__title'>Experience </h2>
            <button onClick={this.handleAddExp} type='button' id='exp__add'>
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
