import React, { useState } from "react";
import { GeneralInfo } from "./components/General";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { EducationForm } from "./components/EducationForm";
import { GeneralForm } from "./components/GeneralForm";
import { ExperienceForm } from "./components/ExperienceForm";

const App = function () {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    tel: "",
    address: ["", ""]
  });
  const [displayGenForm, setDisplayGenForm] = useState(false);
  const [education, setEducation] = useState([]);
  const [educEditIndex, setEducEditIndex] = useState(0);
  const [displayEducForm, setDisplayEducForm] = useState(false);
  const [experience, setExperience] = useState([]);
  const [expEditIndex, setExpEditIndex] = useState(0);
  const [displayExpForm, setDisplayExpForm] = useState(false);

  let genForm = null;
  let educForm = null;
  let expForm = null;

  // Opening Edit Forms
  const openGenEditMenu = () => setDisplayGenForm(true);

  // ######################## GENERAL SECTION ###########################

  // Handling General Form submission
  const handleCallbackGen = (childData) => {
    setGeneral({
      name: childData.name,
      email: childData.email,
      tel: childData.tel,
      address: [childData.street, childData.city]
    });

    setDisplayGenForm(false);
  };

  // Handling General Form cancel
  const handleCallbackGenCancel = (childData) => setDisplayGenForm(childData);

  // ########################### EDUCATION SECTION ##############################

  // Handle Adding education experience
  const handleAddEduc = () => {
    const prevEduc = education;
    const educIndex = prevEduc.length;

    setEducation([
      ...prevEduc,
      {
        uni: "",
        deg: "",
        sub: "",
        dates: [""]
      }
    ]);

    setEducEditIndex(educIndex);
  };

  // Handling education form open on edit
  const handleCallbackEducEdit = (childData) => {
    setDisplayEducForm(true);
    setEducEditIndex(childData);
  };

  // Handling Education Form cancel
  const handleCallbackEducCancel = (childData) => setDisplayEducForm(childData);

  // Handling Education item delete
  const handleCallbackEducDel = (childData) => {
    const copyEducArr = education.slice();
    copyEducArr.splice(childData, 1);

    setEducation(copyEducArr);
  };

  // Handling Education Form submission
  const handleCallbackEduc = (childData) => {
    // Create copy of array
    const copyEducArr = education.slice();

    // Replace array[index] for specified item
    copyEducArr[educEditIndex] = {
      uni: childData.uni,
      deg: childData.deg,
      sub: childData.sub,
      dates: [childData.dateFrom, childData.dateTo]
    };

    // Set state with new array
    setEducation(copyEducArr);
    setDisplayEducForm(false);
  };

  // ########################### EXPERIENCE SECTION #################################

  // Handle Adding work experience
  const handleAddExp = () => {
    const prevExp = experience;

    setExperience([
      ...prevExp,
      {
        company: "",
        position: "",
        tasks: [""],
        dates: [""]
      }
    ]);
  };

  // Handling Experience form open on edit
  const handleCallbackExpEdit = (childData) => {
    setDisplayExpForm(true);
    setExpEditIndex(childData);
  };

  // Handling ExperienceForm cancel
  const handleCallbackExpCancel = (childData) => setDisplayExpForm(childData);

  // Handling Experience item delete
  const handleCallbackExpDel = (childData) => {
    const copyExpArr = experience.slice();
    copyExpArr.splice(childData, 1);

    setExperience(copyExpArr);
  };

  // Handling Experience form submission
  const handleCallbackExp = (childData) => {
    // Create copy of array
    const copyExpArr = experience.slice();

    // Replace array[index] for specified item
    copyExpArr[expEditIndex] = {
      company: childData.company,
      position: childData.position,
      tasks: childData.tasks,
      dates: [childData.dateFrom, childData.dateTo]
    };

    setExperience(copyExpArr);
    setDisplayExpForm(false);
  };

  if (displayGenForm) {
    genForm = (
      <GeneralForm
        data={general}
        parentCallbackGen={handleCallbackGen}
        parentCallbackGenCancel={handleCallbackGenCancel}
      ></GeneralForm>
    );
  }

  if (displayEducForm) {
    educForm = (
      <EducationForm
        data={education[educEditIndex]}
        parentCallbackEducCancel={handleCallbackEducCancel}
        parentCallbackEduc={handleCallbackEduc}
      ></EducationForm>
    );
  }

  if (displayExpForm) {
    expForm = (
      <ExperienceForm
        data={experience[expEditIndex]}
        parentCallbackExpCancel={handleCallbackExpCancel}
        parentCallbackExp={handleCallbackExp}
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
            <button onClick={openGenEditMenu} type='button' className='btn--cv'>
              Edit
            </button>
          </div>
          <GeneralInfo data={general}></GeneralInfo>
          {genForm}
        </div>
      </div>

      <div className='App__right-half'>
        <div className='section__container'>
          <div className='section__header__container'>
            <h2 className='section__title'>Experience </h2>
            <button onClick={handleAddExp} type='button' className='btn--cv'>
              Add Experience
            </button>
          </div>
          {expForm}
          <Experience
            parentCallbackExpIndexDel={handleCallbackExpDel}
            parentCallbackExpIndexEdit={handleCallbackExpEdit}
            experience={experience}
          ></Experience>
        </div>

        <div className='section__container'>
          <div className='section__header__container'>
            <h2 className='section__title'>Education</h2>
            <button onClick={handleAddEduc} type='button' className='btn--cv'>
              Add Education
            </button>
          </div>
          {educForm}
          <Education
            parentCallbackEducIndexDel={handleCallbackEducDel}
            parentCallbackEducIndexEdit={handleCallbackEducEdit}
            education={education}
          ></Education>
        </div>
      </div>
    </div>
  );
};

export default App;
