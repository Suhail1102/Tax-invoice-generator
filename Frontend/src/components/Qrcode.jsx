import React from 'react'
import { useState } from 'react';
import { useQRCode } from '@reactuses/core/useQRCode';

function Qrcode() {

    // const [text, setText] = useState("https://reactuse.com/");
    const url = window.location.href;
    const { qrCode, error } = useQRCode(url);
  return (
 <>
 
    <div>
      {/* <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to generate QR code"
      /> */}
      <br />
      <br />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
    
 
 </>
  )
}

export default Qrcode