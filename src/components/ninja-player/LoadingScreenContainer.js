import React from 'react'
import './loading-screen-container.css';

const LoadingScreenContainer = (props) => {
  return (
    <div className="loading-screen-container">
      {props.children}
    </div>
  )
}

export default LoadingScreenContainer;