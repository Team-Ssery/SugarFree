import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './GiveCandyPage.css';

const input = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    pw: ""
  });

  return (
    <div id='login-div'>
      <fieldset>
        <legend>Input your Id and Password</legend>
        <InputField data={loginInfo} onChange={setLoginInfo} />
      </fieldset>
    </div>
  );
}

const InputName = ({ data, onChange }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;

    onChange({
      ...data,
      [name]: [value]
    });
  };

  return (
    <div className="bgc" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font1">당신의 이름은?</p>
      <div class="round">
        <input
          type="text"
          placeholder='ID'
          name="id"
          onChange={handleChange}
          value={data.name} />
      </div>
    </div>
  );
}

export default InputName;