import React from 'react';
import { useHistory } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
// import axios from 'axios';

const CheckEventActivityEmoji = props => {
  console.log(props);
  const history = useHistory();

  const OnSubmit = props => {
    history.push('/QrReader');
  };

  const goToMainPage = () => {
    history.push('/checking-buttons');
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
              <h2 className="">Select Your Activity</h2>
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
    background-color: transparent;
    border-radius: 20px;
    border: none;
    text-align: center;
    font-size: 20px;
    transition: all 0.5s;
    margin: 20px;
    cursor: pointer;
    /* margin-bottom: 10px; */
    margin-top: -165px;
    margin-left: -85%;
  }

  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
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

    background-color: #d1d1d1; /* light gray */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25%;
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

  @media only screen and (max-device-width: 960px) and (-webkit-min-device-pixel-ratio: 1) {
    .left-arrow-button {
      display: inline-block;
      background-color: transparent;
      border-radius: 20px;
      border: none;
      text-align: center;
      font-size: 20px;
      transition: all 0.5s;
      margin: 20px;
      cursor: pointer;
      /* margin-bottom: 10px; */
      margin-top: -120px;
      margin-left: -75%;
    }

    .ActivityContainerBox {
      padding: 160px 110px;
      border-radius: 60px;

      background-color: #d1d1d1; /* light gray */
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10%;
    }
  }

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 1) {
    .left-arrow-button {
      font-size: 14px;
      transition: all 0.5s;
      margin: 20px;
      cursor: pointer;
      /* margin-bottom: 10px; */
      margin-top: -120px;
      margin-left: -25%;
    }
    .arrow {
      border: solid black;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3.5px;
    }

    .ActivityContainerBox {
      padding: 145px 15px;
      border-radius: 60px;
      align-items: center;
      margin-top: 10%;
    }

    label {
      margin-top: 20%;
    }
    .dropdown {
      border-radius: 20px;
      background-color: white;
      font-size: x-large;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
