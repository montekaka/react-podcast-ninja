
import React, {useState} from 'react'
import { Plus, Minus } from 'react-feather';

const style = {
  display: 'flex',
  minHeight: "2rem",
  gap: "10px",  
  alignItems: "center",
  justifyContent: "space-between"
}

export default function CollapseCard(props) {

  const [open, setOpen] = useState(false);

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
    <div className='ninja-collapse-container' style={{backgroundColor, borderRadius: "10px", padding: "1.25rem"}}>
      <div className='ninja-collapse-header' 
        style={{...style, cursor: "pointer"}}
        onClick={() => {
        setOpen(!open);
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
        <div>
          {open ? <Minus/> : <Plus/>}
        </div>
      </div>
      {open && <div className='ninja-collapse-body'>
        {props.children}
      </div>}
    </div>
  )
}
