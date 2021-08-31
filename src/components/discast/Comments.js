import React from 'react';
import {useAtom} from 'jotai'
import {commentsAtom, configsAtom} from './jotai'
import Comment from './Comment'
import {getHHMMSSFromSeconds} from './libs'

const Comments = () => {
  const [comments] = useAtom(commentsAtom);
  const [themeState] = useAtom(configsAtom)

  return (
    <div className="bh-comments">
      <div style={{marginBottom: '20px'}}>
        <div style={{
          fontSize: "1.2em",
          color: themeState.primaryTextColor,
          opacity: 0.8
        }}>
          {comments.length} comments
        </div>
        <hr style={{color: themeState.primaryTextColor, opacity: 0.8}}/>
      </div>
      {
        comments.map((comment, idx) => <Comment 
          key={idx}
          idx={idx}
          startTime={getHHMMSSFromSeconds(comment.startSecond)}
          endTime={getHHMMSSFromSeconds(comment.endSecond)}
          message={comment.message}
        />)
      }
    </div>
  )
}

export default Comments;