import React from 'react';
import { useHistory } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
// import axios from 'axios';

const CheckButtonsContainer = props => {
  const history = useHistory();

  const routeToCheckIn = () => {
    history.push('/emoji-check-in');
  };
  const routeToCheckEvent = () => {
    history.push('/activity-check-in');
  };
  const routeToCheckOut = () => {
    history.push('/emoji-check-out');
  };

  return (
    <div className="app">
      <NavBar />

      <StyledEmojiPage>
        <div className="EmojiContainerBox">
          <button onClick={routeToCheckIn} className="btn CheckButtons">
            Check-In
          </button>
          <button onClick={routeToCheckEvent} className="btn CheckButtons">
            Check-Event
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
  .app {
    background-color: black;
  }

  .EmojiContainerBox {
    border: 3px solid black;
    -webkit-box-shadow: 20px 16px 20px 10px #121f35;
    box-shadow: 20px 16px 20px 10px #121f35;
    padding: 130px 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
  }

  .btn {
    background-color: white;
    position: relative;
    display: block;
    color: black;
    font-size: 29px;
    text-decoration: none;
    margin: 30px;
    border: 3.5px solid #519957;
    border-radius: 25px;
    height: 40%;
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

  /* 
  .nextbtn{
    border: 2.5px solid #519957;
    color: #519957;
    background-color: white;
    font-size: 16px;
    
    padding: 4px 25px;
    opacity: 0.7;
  }

  .nextbtn:hover{
    background-color: #ebffed;
    color: #519957;
   
  }

  .nextbtn:active{
    transition: none;
    color: black;
  } */
`;
