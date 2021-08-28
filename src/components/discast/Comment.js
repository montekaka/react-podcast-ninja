import React from 'react';
import {useAtom} from 'jotai'
import {playCommentAtom, configsAtom} from './jotai'

const Comment = (props) => {
  const { startTime, endTime, message, author, idx} = props;
  const [themeState] = useAtom(configsAtom);
  const [, playComment] = useAtom(playCommentAtom)

  const handleClickPlay = () => {
    playComment(idx);
  }

  return (
    <div className="bh-comment">
      <div style={{
        height: "20px",
        // backgroundColor: 'yellowgreen',
        display: 'flex',
        fontSize: '0.8em',
        justifyContent: 'space-between'
      }}>        
        <div style={{
          color: themeState.primaryTextColor,          
        }}>
          {startTime} - {endTime}
        </div>
        <div onClick={handleClickPlay} style={{cursor: 'pointer'}}>Play</div>
      </div>      

      <div style={{color: themeState.primaryTextColor, marginBottom: '20px'}}>
        <div style={{marginBottom: '10px', marginTop: '5px', marginBottom: '20px', fontSize: '0.8em'}}>USER_NAME</div>
        <div>{message}</div>
      </div>
      <hr style={{color: themeState.primaryTextColor, opacity: 0.3}}/>
    </div>
  )
}

export default Comment;