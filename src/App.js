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
      general: {
        name: "",
        email: "",
        tel: "",
        address: ["", ""]
      },
      displayGenForm: false,

      education: [],
      educEditIndex: 0,
      displayEducForm: false,

      experience: [],
      expEditIndex: 0,
      displayExpForm: false
    };
  }

  // Opening general info edit form
  openGenEditMenu = () => {
    this.displayForm("Gen");
  };

  // Opening Education edit form
  openEducForm = () => {
    this.displayForm("Educ");
  };

  // Handling General Form submission
  handleCallbackGen = (childData) => {
    this.setState({
      general: {
        name: childData.name,
        email: childData.email,
        tel: childData.tel,
        address: [childData.street, childData.city]
      },

      displayGenForm: false
    });
  };

  // Handling General Form cancel
  handleCallbackGenCancel = (childData) => {
    this.setState({
      displayGenForm: childData
    });
  };

  // Handling education form open on edit
  handleCallbackEducEdit = (childData) => {
    this.setState({
      displayEducForm: true,
      educEditIndex: childData
    });
  };

  // Handling Education Form cancel
  handleCallbackEducCancel = (childData) => {
    this.setState({
      displayEducForm: childData
    });
  };

  // Handling Education item delete
  handleCallbackEducDel = (childData) => {
    const copyEducArr = this.state.education.slice();
    copyEducArr.splice(childData, 1);

    this.setState({
      education: copyEducArr
    });
  };

  // Handling Education Form submission
  handleCallbackEduc = (childData) => {
    // Create copy of array
    const copyEducArr = this.state.education.slice();

    // Replace array[index] for specified item
    copyEducArr[this.state.educEditIndex] = {
      uni: childData.uni,
      deg: childData.deg,
      sub: childData.sub,
      dates: [childData.dateFrom, childData.dateTo]
    };

    // Set state with new array
    this.setState({
      education: copyEducArr,

      displayEducForm: false
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
  };

  // Display forms function
  displayForm = (formType) => {
    const stateForm = `display${formType}Form`;
    if (!this.state[stateForm]) {
      this.setState({
        [stateForm]: !this.state[stateForm]
      });
    }
  };

  render() {
    let genForm = null;
    if (this.state.displayGenForm) {
      genForm = (
        <GeneralForm
          data={this.state.general}
          parentCallbackGen={this.handleCallbackGen}
          parentCallbackGenCancel={this.handleCallbackGenCancel}
        ></GeneralForm>
      );
    }

    let educForm = null;
    if (this.state.displayEducForm) {
      educForm = (
        <EducationForm
          data={this.state.education[this.state.educEditIndex]}
          parentCallbackEducCancel={this.handleCallbackEducCancel}
          parentCallbackEduc={this.handleCallbackEduc}
        ></EducationForm>
      );
    }

    return (
      <div className='App'>
        <h1>CV Generator</h1>

        <div className='general__container'>
          <h2 className='general__title'>General Information</h2>
          <GeneralInfo data={this.state.general}></GeneralInfo>
          <button
            onClick={this.openGenEditMenu}
            className='btn__general--edit'
            type='button'
          >
            Edit
          </button>
          {genForm}
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
            parentCallbackEducIndexDel={this.handleCallbackEducDel}
            parentCallbackEducIndexEdit={this.handleCallbackEducEdit}
            education={this.state.education}
          ></Education>
        </div>

        {educForm}
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
