import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Success.css';
import check from '../../../assets/images/ad1.jpg';

const API_URL = 'https://dog.ceo/api/breeds/image/random/';

export default function Success(props) {
  const studentId = props.location.state;
  const [dogData, setDogData] = useState({});

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogData(data));
  }, []);

  return (
    <div className="apps">
      <div className="card">
        <img src={check} alt="check"></img>
        <h1> {studentId} Thank you for checking in!</h1>
        <h3>Your dog of the day</h3>
        <div className="dogimage">
          <img src={dogData.message} alt="cute dog" />
        </div>
      </div>
    </div>
  );
}
