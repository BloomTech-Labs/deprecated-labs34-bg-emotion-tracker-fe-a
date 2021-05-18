import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import QrReader from 'modern-react-qr-reader';
import { Button } from 'antd';

const QRCodeReader = props => {
  const history = useHistory();

  const [scanByWebcam, setScanByWebcam] = useState('');

  const handleError = err => {
    console.log(err);
  };

  const handleScan = data => {
    if (data) {
      setScanByWebcam(data);
    }
  };

  const handleChange = e => {
    setScanByWebcam(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/checking-buttons');
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
        QR Code Scanned: <br /> {scanByWebcam}
      </h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="id-text">
          Student ID:
          <input value={scanByWebcam} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default QRCodeReader;
