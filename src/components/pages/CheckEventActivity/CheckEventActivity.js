import React from 'react';
import { useHistory } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
// import axios from 'axios';

const CheckEventActivityEmoji = props => {
  const history = useHistory();

  const OnSubmit = () => {
    history.push('/activity-check-in-emoji');
  };

  return (
    <>
      <NavBar />
      <StyledActivities>
        <h1>Check Event</h1>
        <div className="ActivityContainerBox">
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
                <option value="torchClub">Torch Club</option>
              </select>
            </label>
          </form>
          <button onClick={OnSubmit}>Next</button>
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
  .ActivityContainerBox {
    border: 2px solid black;

    -webkit-box-shadow: 20px 16px 20px 10px #121f35;
    box-shadow: 20px 16px 20px 10px #121f35;
    padding: 130px 160px;
    border-radius: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
  }
  .dropdown {
    font-size: x-large;
  }
`;
