import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import QrReader from 'modern-react-qr-reader';

const QRCodeReader = () => {
  const [studentId, setStudentId] = useState('');
  const history = useHistory();

  const handleError = err => {
    console.log(err);
  };

  const handleScan = data => {
    if (data) {
      setStudentId(data);
    }
  };

  const handleChange = e => {
    setStudentId(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/checking-buttons', studentId);
    // Need to add where we going to send the Id that is recieved
  };

  return (
    <div style={{ justifyContent: 'center', textAlign: 'center' }}>
      <QrReader
        delay={300}
        facingMode={'environment'}
        style={{ width: '40%', margin: '0 auto', padding: '4%' }}
        onError={handleError}
        onScan={handleScan}
      />
      <h2>
        QR Code Scanned: <br /> {studentId}
      </h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="id-text">
          Student ID:{'  '}
          <input value={studentId} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default QRCodeReader;
