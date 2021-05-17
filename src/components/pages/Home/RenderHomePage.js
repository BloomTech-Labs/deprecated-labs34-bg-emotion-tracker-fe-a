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
`;

function RenderHomePage(props) {
  const { userInfo /*authService*/ } = props;
  return (
    <>
      <NavBar titleName="Dashboard" backgroundColor="#293845" />
      <StyledHomePage>
        <h2>Club Name</h2>
        <Link to="./QRreader">
          <Button type="primary">Click Me!</Button>
        </Link>
        <Card>Sample Data</Card>
      </StyledHomePage>
    </>
  );
}
export default RenderHomePage;
