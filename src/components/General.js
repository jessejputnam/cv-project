import React from "react";
import uniqid from "uniqid";
import emailIcon from "../images/icon-email.svg";
import phoneIcon from "../images/icon-phone.svg";
import homeIcon from "../images/icon-home.svg";

const AddressLines = function (props) {
  const addressLineArr = props.address;
  const listItems = addressLineArr.map((line) => (
    <li key={uniqid()}>{line}</li>
  ));

  return <ul>{listItems}</ul>;
};

const GeneralInfo = function (props) {
  return (
    <div className='section-item__container'>
      <h1 className='cv__name'>{props.data.name}</h1>
      <div className='general__row'>
        <img src={phoneIcon} alt='phone icon' height='18px' />
        <p>{props.data.tel}</p>
      </div>
      <div className='general__row'>
        <img src={emailIcon} alt='email icon' height='18px' />
        <p>{props.data.email}</p>
      </div>
      <div className='general__row general__row--address'>
        <img src={homeIcon} alt='address icon' height='18px' />
        <AddressLines address={props.data.address}></AddressLines>
      </div>
    </div>
  );
};

export { GeneralInfo };
