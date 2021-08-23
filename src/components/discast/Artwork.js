import React from 'react';

const Artwork = (props) => {
  const {src} = props;

  return (
    <div className="bh-main-artwork">
      <img src={src} className="bnt-main-artwork-image" name="artwork"/>
      {props.children}        
    </div>
  )
}

export default Artwork;