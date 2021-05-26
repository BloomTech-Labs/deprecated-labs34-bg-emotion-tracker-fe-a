import React from 'react';
import { useHistory } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
// import axios from 'axios';

const CheckButtonsContainer = ({ setStatus, status }) => {
  const history = useHistory();

  const routeToCheckIn = () => {
    setStatus({ ...status, task: 'Check-in', activity: false });
    history.push('/QrReader');
  };
  const routeToCheckEvent = () => {
    setStatus({
      ...status,
      task: 'Activity Checkout',
      activity: true,
    });
    history.push('/activity-check-in');
  };
  const routeToCheckOut = () => {
    setStatus({ ...status, task: 'Check-out', activity: false });
    history.push('/QrReader');
  };

  return (
    <div className="app">
      <NavBar />

      <StyledEmojiPage>
        <div className="EmojiContainerBox">
          <h2> What are we doing?</h2>
          <button onClick={routeToCheckIn} className="btn CheckButtons">
            Check-In
          </button>
          <button onClick={routeToCheckEvent} className="btn CheckButtons">
            Activity Check-In
          </button>
          <button onClick={routeToCheckOut} className="btn CheckButtons">
            Check-Out
          </button>
        </div>
      </StyledEmojiPage>
    </div>
  );
};

export default CheckButtonsContainer;

const StyledEmojiPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .EmojiContainerBox {
    border: 3px solid black;

    -webkit-box-shadow: 20px 16px 20px 10px #121f35;
    box-shadow: 20px 16px 20px 10px #121f35;
    padding: 130px 160px;
    border-radius: 60px;

    background-color: #d1d1d1; /* light gray */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
  }

  h2 {
    font-size: xx-large;
  }

  .btn {
    background-color: white;
    position: relative;
    display: block;
    color: black;
    font-size: 35px;
    text-decoration: none;
    margin: 30px;
    border: 3.5px solid #519957;
    border-radius: 30px;
    height: 50%;
    width: 90%;
    overflow: hidden;
  }

  .btn:hover {
    opacity: 1;
    transition: 0.3s;
    background-color: #ebffed;
  }

  .btn:active {
  }

  @media only screen and (max-device-width: 960px) and (-webkit-min-device-pixel-ratio: 1) {
    .EmojiContainerBox {
      border: 3px solid black;

      -webkit-box-shadow: 20px 16px 20px 10px #121f35;
      box-shadow: 20px 16px 20px 10px #121f35;
      padding: 100px 130px;
      border-radius: 60px;

      background-color: #d1d1d1; /* light gray */
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15%;
    }

    h2 {
      font-size: x-large;
    }

    .btn {
      background-color: white;
      position: relative;
      display: block;
      color: black;
      font-size: 30px;
      text-decoration: none;
      margin: 25px;
      border: 3.5px solid #519957;
      border-radius: 30px;
      height: 50%;
      width: 85%;
      overflow: hidden;
    }
  }

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 1) {
    .EmojiContainerBox {
      padding: 60px 25px;
      border-radius: 60px;

      background-color: #d1d1d1; /* light gray */
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20%;
    }

    h2 {
      font-size: x-large;
    }
  }
`;
