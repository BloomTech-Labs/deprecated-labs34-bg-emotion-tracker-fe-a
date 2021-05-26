import React from 'react';
import { useHistory } from 'react-router-dom';
import QrReader from 'modern-react-qr-reader';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';

const QRCodeReader = ({ setStatus, status }) => {
  console.log(status);
  const history = useHistory();

  const handleError = err => {
    console.log(err);
  };

  const handleScan = data => {
    if (data) {
      setStatus({ ...status, studentId: data });
    }
  };

  const handleChange = e => {
    setStatus({ ...status, studentId: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/emoji-check-in');
    // Need to add where we going to send the Id that is recieved
  };

  return (
    <div>
      <NavBar />
      <QRScanner>
        <div className="QRContainerBox">
          <QrReader
            className="QRScanner"
            delay={300}
            facingMode={'environment'}
            on
            Error={handleError}
            onScan={handleScan}
          />
          <h2>Scan Badge</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="id-text">
              Enter ID:
              <input value={status.studentId} onChange={handleChange} />
            </label>
            <button className="btn">Submit</button>
          </form>
        </div>
      </QRScanner>
    </div>
  );
};

export default QRCodeReader;

const QRScanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .app {
    background-color: black;
  }

  .QRContainerBox {
    border: 3px solid black;

    -webkit-box-shadow: 20px 16px 20px 10px #121f35;
    box-shadow: 20px 16px 20px 10px #121f35;
    padding: 80px 110px;
    border-radius: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
  }

  .QRScanner {
    width: 90%;
    margin: 0 auto;
    padding: 2%;
  }

  .btn {
    background-color: white;
    position: relative;
    display: block;
    color: black;
    font-size: 15px;
    text-decoration: none;
    margin: 30px;
    border: 3.5px solid #519957;
    border-radius: 25px;
    height: 20%;
    width: 60%;

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
  border: 1.5px solid #519957;
  color: #519957;
  background-color: white;
  font-size: 16px;
  
  padding: 2px 15px;
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
