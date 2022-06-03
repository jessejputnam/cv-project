import React, { useState } from "react";

const GeneralForm = function (props) {
  let [name, setName] = useState(props.data.name);
  let [email, setEmail] = useState(props.data.email);
  let [tel, setTel] = useState(props.data.tel);
  let [street, setStreet] = useState(props.data.address[0]);
  let [city, setCity] = useState(props.data.address[1]);

  const onSubmit = (e) => {
    e.preventDefault();

    // Transfer input data to callback for parent
    const data = { name, email, tel, street, city };
    props.parentCallbackGen(data);
  };

  const onCancel = () => props.parentCallbackGenCancel(false);

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div className='form__row'>
          <label>Name: </label>
          <input
            className='text-input'
            type='text'
            name='nameInput'
            autoComplete='name'
            placeholder='Doctor Strange'
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>

        <div className='form__row'>
          <label>Email: </label>
          <input
            className='text-input'
            type='email'
            name='emailOnput'
            autoComplete='email'
            placeholder='strangedoctor@mcu.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>

        <div className='form__row'>
          <label>Phone: </label>
          <input
            className='text-input'
            type='text'
            name='telInput'
            autoComplete='tel'
            placeholder='(413) 666-3091'
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          ></input>
        </div>

        <div className='form__row'>
          <label>Street Address: </label>
          <input
            className='text-input'
            type='text'
            name='streetInput'
            autoComplete='street-address'
            placeholder='127 Bleaker St Apt 1'
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          ></input>
        </div>

        <div className='form__row'>
          <label>City, State, ZIP: </label>
          <input
            className='text-input'
            type='text'
            name='cityInput'
            id='cityInput'
            placeholder='New York, NY 10481'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          ></input>
        </div>

        <div className='form__btn__container'>
          <button onClick={onCancel} type='button' id='cancel-general'>
            Cancel
          </button>
          <input type='submit' id='submit-general'></input>
        </div>
      </form>
    </div>
  );
};

export { GeneralForm };
