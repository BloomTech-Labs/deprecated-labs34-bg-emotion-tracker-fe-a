import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import './Success.css';
import check from '../../../assets/images/ad12.jpg';
import NavBar from '../../common/NavBar';
import styled from 'styled-components';

export default function Success(props) {
  const studentId = props.location.state;
  const [dogData, setDogData] = useState({});
  const history = useHistory();
  const onSubmit = () => {
    history.push('/');
  };

  const goToMainPage = () => {
    history.push('/checking-buttons');
  };

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogData(data));
  }, []);

  //   const handleSubmit = () => {
  //       e.preventDefault();
  //       history.push('/dashboard');
  //   }

  return (
    <>
      <NavBar />
      <StyledEmoji>
        <div className="EmojiContainerBox">
          <button onClick={goToMainPage} className="left-arrow-button">
            <i class="arrow left"></i>
            <span>Return to Check-in</span>
          </button>
          <h1> ✔️ </h1>
          <h1> {studentId} Check-in Successful!</h1>
          <h3>Hey, look, a cute doggo!</h3>
          <div className="dogimage">
            <img src={dogData.message} alt="cute dog" />
          </div>
          <button onClick={onSubmit} className="finish-button">
            Return to Dashboard
          </button>
        </div>
      </StyledEmoji>
    </>
  );
}

const StyledEmoji = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  /* height: 100vh; */
  /* border: 1px solid black; */
  .dogimage {
    padding-top: 1.3rem;
    padding-bottom: 3rem;
    width: auto;
    height: 50%;
  }

  .EmojiContainerBox {
    border: 2px solid black;

    -webkit-box-shadow: 20px 16px 20px 10px #121f35;
    box-shadow: 20px 16px 20px 10px #121f35;
    padding: 130px 160px;
    border-radius: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
  }
  .image {
    width: 1%;
    height: auto;
  }

  /* start back button  */

  .left-arrow-button {
    display: inline-block;
    border: none;
    background-color: white;
    text-align: center;
    font-size: 15.5px;
    transition: all 0.5s;
    margin: 2px;
    cursor: pointer;
    margin-bottom: 80px;
    margin-top: -100px;
    margin-left: -280px;
  }
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  /* End Back button */

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
    transition: 0.3s;
  }
  .finish-button:active {
    transition: none;
    color: black;
  }
`;

//   return (
//     <div className="apps">
//         {/* <NavBar /> */}
//     <div className="card">
//         <img src={check} alt="check"></img>
//         <h1>Thank you for checking in!</h1>
//         <h3>Your dog of the day</h3>
//         <div className="dogimage">
//           <img src={dogData.message} alt="cute dog" />
//         </div>
//         <div>
//             <button className="return" onClick={onSubmit}>Return to Dashboard</button>
//         </div>
//       </div>
//     </div>
//   );
// }
