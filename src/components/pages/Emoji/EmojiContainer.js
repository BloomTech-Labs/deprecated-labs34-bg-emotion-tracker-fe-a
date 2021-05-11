import React, { useEffectuseState } from 'react';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';
import axios from 'axios';

const EmojiContainer = props => {
  return (
    <div className="">
      <NavBar />

      <StyledEmoji>
        <div className="EmojiContainer">
          <h1>Check In</h1>
          <div>
            <button>Finish</button>
          </div>
        </div>
      </StyledEmoji>
    </div>
  );
};

export default EmojiContainer;

const StyledEmoji = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;
