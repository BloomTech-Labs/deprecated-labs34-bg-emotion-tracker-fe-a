import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../../common/NavBar';
import { Card } from 'antd';
import { Button } from 'antd';
import QrReader from '../QRCodeReader';

const StyledHomePage = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  max-width: 90%;
  margin: 3rem auto;

  button {
    border: 200px;
  }
`;

function RenderHomePage(props) {
  const { userInfo /*authService*/ } = props;
  return (
    <>
      <NavBar backgroundColor="#293845" />
      <StyledHomePage>
        <h2 style={{ textAlign: 'center' }}>Club Name:</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
          }}
        >
          <Button type="primary" size="large" href="./checking-buttons">
            Check-in/Check-out
          </Button>
        </div>
        {/* <Card>Sample Data</Card> */}
      </StyledHomePage>
    </>
  );
}
export default RenderHomePage;
