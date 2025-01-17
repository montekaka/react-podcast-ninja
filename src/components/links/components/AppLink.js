import React from 'react'

const style = {
  display: 'flex',
  minHeight: "2rem",
  borderRadius: "10px",
  padding: "1.25rem",
  gap: "10px",
  backgroundColor: "yellow",
  alignItems: "center",
  justifyContent: "space-between"
}

export default function AppLink(props) {
  const {
    title, 
    subtitle,
    link,
    imageSrc,
    backgroundColor,
    titleColor,
    subtitleColor,
    titleDirection,
  } = props;

  return (
    <div className='ninja-app-link-container' 
      style={{...style, backgroundColor: backgroundColor, cursor: link ? "pointer" : null}}
      onClick={() => {
        if(link) {
          window.open(link,'_blank');
        }
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: "center",
        gap: "10px",
      }}>
        { imageSrc && <div>
          <img src={imageSrc} style={{
            width: "40px",
            height: "40px",
          }}/>
        </div>}
        <div style={{
          display: 'flex',
          flexDirection: titleDirection || "column"
        }}>
          <p style={{color: titleColor, margin: 0, fontSize: "0.875rem", fontWeight: "600", lineHeight: "1.5"}}>{title}</p>
          {subtitle && <p style={{color: subtitleColor, margin: 0, fontSize: "0.7rem"}}>{subtitle}</p>}
        </div>
      </div>
      {props.children}
    </div>
  )
}
