import React from 'react';

const Artwork = (props) => {
  const {src, style} = props;

  return (
    <div className="bh-main-artwork" style={style}>
      <img src={src} 
        className="bt-main-artwork-image" 
        name="artwork"
        style={style}
      />
      {props.children}        
    </div>
  )
}

export default Artwork;