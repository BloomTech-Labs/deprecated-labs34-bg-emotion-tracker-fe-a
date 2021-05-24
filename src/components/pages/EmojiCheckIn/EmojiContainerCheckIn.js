import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
import axios from 'axios';

const EmojiContainerCheckIn = props => {
  const studentInfo = {
    studentId: props.location.state,
    reaction: '',
  };
  const [formState, setFormState] = useState({ studentInfo });
  const history = useHistory();

  const OnSubmit = () => {
    history.push('/success', formState.studentId);
  };

  const goToMainPage = () => {
    history.push('/checking-buttons', formState.studentId);
  };

  const inputChange = e => {
    setFormState({
      ...studentInfo,
      reaction: e.target.value,
    });
    console.log(formState);
  };

  return (
    <>
      <NavBar />
      <StyledEmoji>
        <h1>
          Check In <strong>{studentInfo.studentId}</strong>
        </h1>

        <div className="EmojiContainerBox">
          <p onClick={goToMainPage} className="left-arrow-button">
            <i class="arrow left"></i>
            <span> Return to Checking </span>
          </p>

          {/* Hardcoded for now */}
          <h1 className="id">#263746</h1>

          <h2 className="feelingTitle">How Are you Feeling?</h2>

          <div className="emoji-div">
            <form>
              <input
                name="😁"
                type="button"
                value="😁"
                onClick={inputChange}
              ></input>
              <input
                name="😌"
                type="button"
                value="😌"
                onClick={inputChange}
              ></input>
              <input
                name="😕"
                type="button"
                value="😕"
                onClick={inputChange}
              ></input>
              <input
                name="😒"
                type="button"
                value="😒"
                onClick={inputChange}
              ></input>
              <input
                name="😭"
                type="button"
                value="😭"
                onClick={inputChange}
              ></input>
            </form>
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
    background-color: none;
    border-radius: 20px;
    border: none;
    text-align: center;
    font-size: 23px;
    transition: all 0.5s;
    margin: 8px;
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

  /* Emojis Start!!! */
  form {
    display: flex;
    flex-direction: row;
  }

  input {
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: 90px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin: 2%;
    margin-left: 12px;
    margin-right: 12px;
    border: none;
    background: transparent;
  }

  input:hover {
    transform: scale(2.2);
    /* transform: rotate(360deg); */
  }
  /* Emojis End!!! */

  /* Finish button!!! */
  .finish-button {
    border: 2.5px solid #519957;
    color: #519957;
    background-color: white;
    font-size: 30px;
    border-radius: 30px;
    height: 15%;
    width: 65%;
    padding: 1% 10%;
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

  @media only screen and (max-device-width: 960px) and (-webkit-min-device-pixel-ratio: 1) {
    /* background-color: green; */

    /* Return Button Start!!! */
    .left-arrow-button {
      display: inline-block;
      background-color: none;
      border-radius: 20px;
      border: none;
      text-align: center;
      font-size: 20px;
      transition: all 0.5s;
      margin: 10px;
      cursor: pointer;
      /* margin-bottom: 10px; */
      margin-top: -17%;
      margin-left: -57%;
    }

    .arrow {
      border: solid black;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 5px;
    }
    /* Return Button End!!! */

    .EmojiContainerBox {
      padding: 140px 25px;
      border-radius: 60px;

      background-color: #d1d1d1; /* light gray */
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input {
      flex-wrap: wrap;
      justify-content: space-evenly;
      font-size: 76px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      margin: 4%;
      margin-left: 12px;
      margin-right: 12px;
      border: none;
      background: transparent;
    }

    /* Finish button!!! */
    .finish-button {
      border: 2.5px solid #519957;
      color: #519957;
      background-color: white;
      font-size: 30px;
      border-radius: 30px;
      height: 25%;
      width: 65%;
      padding: 1% 10%;
      opacity: 0.7;
      margin: 6%;
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
  }

  @media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 1) {
    /* Return Button Start!!! */
    .left-arrow-button {
      display: inline-block;
      background-color: none;
      border-radius: 20px;
      border: none;
      text-align: center;
      font-size: 14px;
      transition: all 0.5s;
      margin: 9px;
      cursor: pointer;
      /* margin-bottom: 10px; */
      margin-top: -37%;
      margin-left: -31%;
    }

    .arrow {
      border: solid black;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3.5px;
    }

    .left {
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
    /* Return Button End!!! */

    .EmojiContainerBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      /* margin: ; */
    }

    form {
      display: flex;
      flex-direction: row;
    }

    input {
      flex-wrap: wrap;
      justify-content: space-evenly;
      font-size: 39px;
      transition: all 0.5s ease-in-out;
      margin: 1%;
      margin-left: 3.5px;
      margin-right: 3.5px;
      border: none;
      background: transparent;
    }

    input:hover {
      transform: scale(2.2);
      /* transform: rotate(360deg); */
    }
  }
`;
