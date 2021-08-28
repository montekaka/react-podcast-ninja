import React from 'react';

const Comment = (props) => {
  const { startTime, endTime, message, author, idx} = props;

  return (
    <div className="bh-comment">
      <div>
        <div>USER_NAME</div>
      </div>      

      <div>
        <div>{startTime} - {endTime}</div>
        <div>{message}</div>
      </div>
      <div>Play</div>
    </div>
  )
}

export default Comment;