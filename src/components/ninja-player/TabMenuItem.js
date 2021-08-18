import React from "react";

const TabMenuItem = ({color, menuId, label, handleClick}) => {
  return (
    <div  
      onClick={() => {
        handleClick(menuId)
      }}             
      style={{
        cursor: 'pointer',
        color: color,
        padding: '4px'
      }}>
        {label}
    </div>
  )
}

export default TabMenuItem