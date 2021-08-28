import React from 'react';

const Comment = (props) => {
  const { startTime, endTime, message, author, idx} = props;

  return (
    <div className="bh-comment">
      <div>{author}</div>
      <div>
        <div>{startTime} - {endTime}</div>
        <div>{message}</div>
      </div>
      <div>Play</div>
    </div>
  )
}

export default Comment;