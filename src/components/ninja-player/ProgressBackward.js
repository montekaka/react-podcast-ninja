import React from 'react';
import {RotateCcw} from 'react-feather'

const ProgressBackward = () => {
  return (
    <div className="progress-control">
      <RotateCcw className="icon"/>
      <div className="label">5</div>
    </div>
  )
}

export default ProgressBackward;