import React from 'react';
import { useHistory } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
// import axios from 'axios';

const CheckEventActivityEmoji = props => {
  const studentId = props.location.state;
  const history = useHistory();

  const OnSubmit = props => {
    history.push('/activity-check-in-emoji', studentId);
  };

  const goToMainPage = () => {
    history.push('/checking-buttons', studentId);
  };

  return (
    <>
      <NavBar />
      <StyledActivities>
        <h1>Check Event</h1>
        <div className="ActivityContainerBox">
          <button onClick={goToMainPage} className="left-arrow-button">
            <i class="arrow left"></i>
            <span> Return to Checking </span>
          </button>

          <form className="form container">
            <label>
              <h2 className="">
                Select Your Activity <strong>{studentId}</strong>.
              </h2>
              <select className="dropdown" name="size">
                <option value="">- Select an option -</option>
                <option value="sports">⚽️ Sports</option>
                <option value="arts">🎨 Arts</option>
                <option value="performingArts">🎭 Performing Arts</option>
                <option value="stem">🏫 STEM</option>
                <option value="cooking">🎂 Cooking</option>
                <option value="powerHour">🔋 Power Hour</option>
                <option value="passportToManhood">
                  🤵🏽‍♂️ Passport to Manhood
                </option>
                <option value="smartGirls">👩🏼‍💼 SMART Girls</option>
                <option value="torchClub">🗂Torch Club</option>
              </select>
            </label>
          </form>

          <button className="next" onClick={OnSubmit}>
            Next
          </button>
        </div>
      </StyledActivities>
    </>
  );
};

export default CheckEventActivityEmoji;

const StyledActivities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */

  /* start back button  */

  .left-arrow-button {
    display: inline-block;
    border: none;
    background-color: white;
    text-align: center;
    font-size: 15.5px;
    transition: all 0.5s;
    margin: 30px;
    cursor: pointer;
    margin-bottom: 140px;
    margin-top: -155px;
    margin-left: -200px;
  }

  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  /* End Back button */

  .ActivityContainerBox {
    border: 2px solid black;

    -webkit-box-shadow: 20px 16px 20px 10px #121f35;
    box-shadow: 20px 16px 20px 10px #121f35;
    padding: 200px 115px;
    border-radius: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
  }

  .dropdown {
    border: 2.5px solid #519957;
    border-radius: 20px;
    background-color: white;
    font-size: xx-large;
  }

  .next {
    border: 2.5px solid #519957;
    color: #519957;
    background-color: white;
    font-size: 30px;
    border-radius: 30px;
    height: 9%;
    width: 70%;
    padding: 4px 25px;
    opacity: 0.7;
    margin: 8%;
  }

  .next:hover {
    background-color: #ebffed;
    color: #519957;
    opacity: 1;
    transition: 0.3s;
  }

  .next:active {
    transition: none;
    color: black;
  }
`;
