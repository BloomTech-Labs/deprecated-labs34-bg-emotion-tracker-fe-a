import React from 'react';
// import React, { useEffect, useState } from 'react';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
// import axios from 'axios';

const EmojiContainerCheckIn = props => {
  return (
    <>
      <NavBar />
      <StyledEmoji>
        <h1>Check In</h1>
        <div className="EmojiContainerBox">
          <div className="feeling-box">
            <h2>How Are you Feeling?</h2>
          </div>

          <button className="finish-button">Finish</button>
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
  /* border: 1px solid black; */

  .EmojiContainerBox {
    border: 2px solid black;
    -webkit-box-shadow: 20px 16px 20px 10px #121f35;
    box-shadow: 20px 16px 20px 10px #121f35;

    padding: 100px 50px;
  }
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
    transition: 0.5s;
  }
  .finish-button:active {
    transition: none;
    color: black;
  }
`;
