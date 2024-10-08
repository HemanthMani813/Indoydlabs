import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCode = ({ setView }) => {
  const url = window.location.href;

  const handleQRCodeClick = () => {
    setView('mobile'); // Switch to mobile view when scanned
  };

  return (
    <div>
      <h2>Scan to Join:</h2>
      <QRCodeCanvas value={url} size={256} onClick={handleQRCodeClick} />
    </div>
  );
};

export default QRCode;
