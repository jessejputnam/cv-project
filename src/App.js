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

  // Opening experience edit form
  openExpForm = () => {
    this.displayForm("Exp");
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

  // Handling experience form open on edit
  handleCallbackExpEdit = (childData) => {
    this.setState({
      displayExpForm: true,
      expEditIndex: childData
    });
  };

  // Handling Education Form cancel
  handleCallbackExpCancel = (childData) => {
    this.setState({
      displayExpForm: childData
    });
  };

  // Handling Education item delete
  handleCallbackExpDel = (childData) => {
    const copyExpArr = this.state.experience.slice();
    copyExpArr.splice(childData, 1);

    this.setState({
      experience: copyExpArr
    });
  };

  // Handling Experience form submission
  handleCallbackExp = (childData) => {
    // Create copy of array
    const copyExpArr = this.state.experience.slice();

    // Replace array[index] for specified item
    copyExpArr[this.state.expEditIndex] = {
      company: childData.company,
      position: childData.position,
      tasks: childData.tasks,
      dates: [childData.dateFrom, childData.dateTo]
    };

    this.setState({
      experience: copyExpArr,

      displayExpForm: false
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

    let expForm = null;
    if (this.state.displayExpForm) {
      expForm = (
        <ExperienceForm
          data={this.state.experience[this.state.expEditIndex]}
          parentCallbackExpCancel={this.handleCallbackExpCancel}
          parentCallbackExp={this.handleCallbackExp}
        ></ExperienceForm>
      );
    }

    return (
      <div className='App'>
        <div className='App__left-binding'></div>
        <div className='App__left-half'>
          <div className='section__container'>
            <div className='section__header__container'>
              <h2 className='section__title'>Personal Information</h2>
              <button
                onClick={this.openGenEditMenu}
                type='button'
                className='btn--cv'
              >
                Edit
              </button>
            </div>
            <GeneralInfo data={this.state.general}></GeneralInfo>
            {genForm}
          </div>
        </div>

        <div className='App__right-half'>
          <div className='section__container'>
            <div className='section__header__container'>
              <h2 className='section__title'>Experience </h2>
              <button
                onClick={this.handleAddExp}
                type='button'
                className='btn--cv'
              >
                Add Experience
              </button>
            </div>
            {expForm}
            <Experience
              parentCallbackExpIndexDel={this.handleCallbackExpDel}
              parentCallbackExpIndexEdit={this.handleCallbackExpEdit}
              experience={this.state.experience}
            ></Experience>
          </div>

          <div className='section__container'>
            <div className='section__header__container'>
              <h2 className='section__title'>Education</h2>
              <button
                onClick={this.handleAddEduc}
                type='button'
                className='btn--cv'
              >
                Add Education
              </button>
            </div>
            {educForm}
            <Education
              parentCallbackEducIndexDel={this.handleCallbackEducDel}
              parentCallbackEducIndexEdit={this.handleCallbackEducEdit}
              education={this.state.education}
            ></Education>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
