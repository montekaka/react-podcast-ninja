import React from 'react';

export default function SectionHeader({title, textColor}) {
  if(title) {
    return (
      <div>
        <div style={{color: textColor, fontSize: '20px', fontWeight: "bold"}}>{title}</div>
      </div>
    );
  }  

  return null;
}
