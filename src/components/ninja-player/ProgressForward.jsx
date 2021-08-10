import React from 'react';
import {RotateCw} from 'react-feather'

const ProgressForward = () => {
  return (
    <div className="progress-control">
      <RotateCw className="icon"/>
      <div className="label">5</div>
    </div>
  )
}

export default ProgressForward;