import React, { useState } from 'react';
import QrReader from 'modern-react-qr-reader';

const QRCodeReader = props => {
  const [scanByWebcam, setScanByWebcam] = useState('');

  const handleError = err => {
    console.log(err);
  };

  const handleScan = data => {
    if (data) {
      setScanByWebcam(data);
    }
  };

  return (
    <div style={{ justifyContent: 'center', textAlign: 'center' }}>
      <QrReader
        delay={300}
        facingMode={'environment'}
        style={{ width: '50%', margin: '0 auto' }}
        onError={handleError}
        onScan={handleScan}
      />
      <h2>
        QR Code Scanned: <br /> {scanByWebcam}
      </h2>
    </div>
  );
};

export default QRCodeReader;
