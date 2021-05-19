import React from 'react';
import { useHistory } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
// import axios from 'axios';

const EmojiContainerCheckIn = props => {
  const studentId = props.location.state;
  const history = useHistory();

  const OnSubmit = () => {
    history.push('/success', studentId);
  };

  const goToMainPage = () => {
    history.push('/checking-buttons', studentId);
  };

  return (
    <>
      <NavBar />
      <StyledEmoji>
        <h1>
          Check In <strong>{studentId}</strong>
        </h1>

        <div className="EmojiContainerBox">
          <button onClick={goToMainPage} className="left-arrow-button">
            <i class="arrow left"></i>
            <span> Return to Checking </span>
          </button>

          <h2>How Are you Feeling?</h2>
          <h2>😁 🙂 </h2>

          <button onClick={OnSubmit} className="finish-button">
            Finish
          </button>
        </div>
      </StyledEmoji>
    </>
  );
};

export default EmojiContainerCheckIn;

const StyledEmoji = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  /* height: 100vh; */
  /* border: 1px solid black; */

  .EmojiContainerBox {
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

  /* start back button  */

  .left-arrow-button {
    display: inline-block;
    border: none;
    background-color: white;
    text-align: center;
    font-size: 15.5px;
    transition: all 0.5s;
    margin: 2px;
    cursor: pointer;
    margin-bottom: 80px;
    margin-top: -100px;
    margin-left: -280px;
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

  .feeling-box {
    border: none;
  }

  .finish-button {
    border: 2.5px solid #519957;
    color: #519957;
    background-color: white;
    font-size: 16px;
    border-radius: 19px;
    height: 9%;
    width: 50%;
    padding: 4px 25px;
    opacity: 0.7;
  }
  .finish-button:hover {
    background-color: #ebffed;
    color: #519957;
    opacity: 1;
    transition: 0.3s;
  }
  .finish-button:active {
    transition: none;
    color: black;
  }
`;
