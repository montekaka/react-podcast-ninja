import React from 'react'
import { QRCode } from 'react-qrcode-logo';

const style = {
  display: 'flex',
  gap: "10px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "10px", 
  padding: "1.25rem"
}

export default function QRCard(props) {

  const {url, fgColor, bgColor, size, backgroundColor} = props;

  return (
    <div style={{
      backgroundColor, ...style
    }}>
      <QRCode 
        value={url} 
        eyeRadius={5}
        fgColor={fgColor || "#FFFFFF"}
        bgColor={bgColor || "#000"}
        size={size || 150}
      />
      <div>
        {props.children}
      </div>      
    </div>
  )
}
