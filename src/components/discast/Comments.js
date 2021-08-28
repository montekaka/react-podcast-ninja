import React from 'react';
import {useAtom} from 'jotai'
import {commentsAtom} from './jotai'
import Comment from './Comment'

const Comments = () => {
  const [comments] = useAtom(commentsAtom);

  return (
    <div className="bh-comments">
      <div>{comments.length} comments</div>
      {
        comments.map((comment, idx) => <Comment 
          key={idx}
          idx={idx}
          startTime={comment.startTime}
          endTime={comment.endTime}
          message={comment.message}
        />)
      }
    </div>
  )
}

export default Comments;