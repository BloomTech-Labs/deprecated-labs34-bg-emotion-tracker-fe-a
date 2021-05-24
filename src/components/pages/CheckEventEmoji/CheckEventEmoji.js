import React from 'react';
import NavBar from '../../common/NavBar';
// import styled from 'styled-components';
// import axios from 'axios';

const EmojiContainerCheckIn = props => {
  const studentId = props.location.state;

  return (
    <>
      <NavBar />
      <h2>Student {studentId} Check Activity Emoji</h2>
    </>
  );
};

export default EmojiContainerCheckIn;
