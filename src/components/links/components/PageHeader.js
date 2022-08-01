import React from 'react'

const style ={
  display: 'flex',
  gap: "20px",
  flexDirection: "column",
  alignItems: "center",
}

export default function PageHeader(props) {
  const {
    imageSrc,
    title,
    subtitle,
    titleColor,
    subtitleColor,
  } = props

  return (
    <div style={style}>
      {imageSrc && <div>
        <img src={imageSrc} style={{
          width: "96px",
          height: "96px",
          borderRadius: "50%"
        }}/>
      </div>}
      <div
        style={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px"
        }}
      >
          <p style={{color: titleColor, margin: 0, fontSize: "1rem", fontWeight: "700", lineHeight: "1.5", textAlign: "center"}}>{title}</p>
          {subtitle && <p style={{color: subtitleColor, margin: 0, fontSize: "0.7rem", fontWeight: "500", lineHeight: "1.5", textAlign: "center"}}>{subtitle}</p>}
      </div>
    </div>
  )
}
