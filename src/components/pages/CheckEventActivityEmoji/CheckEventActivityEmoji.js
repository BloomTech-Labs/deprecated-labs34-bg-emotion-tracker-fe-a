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
  return (
    <>
      <NavBar />
      <StyledActivities>
        <div className="ActivityContainerBox">
          <h1> Check Event Student: {studentId} </h1>
          <button onClick={OnSubmit} className="finish-button">
            Finish
          </button>
        </div>
      </StyledActivities>
    </>
  );
};

export default EmojiContainerCheckIn;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
  }
`;
