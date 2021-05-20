import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
// import axios from 'axios';

const EmojiContainerCheckIn = props => {
  const studentId = props.location.state;
  const history = useHistory();

  const OnSubmit = () => {
    history.push('/success', studentId);
  };

  const goToPrevPage = () => {
    history.push('/activity-check-in');
  };

  return (
    <>
      <NavBar />
      <StyledEmoji>
        <h1>Check Out</h1>

        <div className="EmojiContainerBox">
          <p onClick={goToPrevPage} className="left-arrow-button">
            <i class="arrow left"></i>
            <span> Return to Activity Check-In </span>
          </p>

          {/* Hardcoded for now */}
          <h1 className="id">{studentId}</h1>

          <h2 className="feelingTitle">How Are you Feeling?</h2>

          <div className="emoji-div">
            <button className="emojis"> 😁 </button>
            <button className="emojis"> 😌 </button>
            <button className="emojis"> 😕 </button>
            <button className="emojis"> 😒 </button>
            <button className="emojis"> 😭 </button>
          </div>

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

  /* start back button  */
  .left-arrow-button {
    display: inline-block;
    background-color: #d1d1d1;
    border-radius: 20px;
    border: none;
    text-align: center;
    font-size: 20px;
    transition: all 0.5s;
    margin: 10px;
    cursor: pointer;
    /* margin-bottom: 10px; */
    margin-top: -165px;
    margin-left: -85%;
  }

  .arrow {
    border: solid green;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
  }

  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  /* End Back button */

  /* Container box Start!!! */
  .EmojiContainerBox {
    border: 2px solid black;

    -webkit-box-shadow: 20px 16px 20px 10px #121f35;
    box-shadow: 20px 16px 20px 10px #121f35;
    padding: 190px 130px;
    border-radius: 60px;

    background-color: #d1d1d1; /* light gray */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
  }
  /* Container box End!!! */

  .id {
    font-size: xx-large;
  }

  /* .feelingTitle{
    margin-bottom
  } */

  /* Emojis Start!!! */
  .emoji-div {
    display: flex;
    flex-direction: row;
    margin: 2%;
  }

  .emojis {
    display: flex;
    justify-content: space-evenly;
    /* border-radius: 30%;
    border: 2px solid black; */
    font-size: 120px;
    cursor: pointer;
    transition: all 0.9s ease-in-out;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    background-color: #d1d1d1; /* light gray */
    background-color: transparent;
  }

  .emojis:hover {
    background-color: transparent;
    transform: scale(2.2);
    /* transform: rotate(360deg); */
  }
  /* Emojis Start!!! */

  /* Finish button!!! */
  .finish-button {
    border: 2.5px solid #519957;
    color: #519957;
    background-color: white;
    font-size: 30px;
    border-radius: 30px;
    height: 9%;
    width: 70%;
    padding: 4px 25px;
    opacity: 0.7;
    /* margin: 2%; */
  }
  .finish-button:hover {
    background-color: #ebffed;
    color: #519957;
    opacity: 1;
    transition: 0.4s;
  }
  .finish-button:active {
    transition: none;
    color: black;
  }
  /* Finish button End!!! */
`;
