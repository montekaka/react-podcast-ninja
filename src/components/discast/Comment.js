import React from 'react';
import {useAtom} from 'jotai'
import {commentsAtom, configsAtom} from './jotai'

const Comment = (props) => {
  const { startTime, endTime, message, author, idx} = props;
  const [themeState] = useAtom(configsAtom);

  return (
    <div className="bh-comment">
      <div style={{
        height: "40px",
        backgroundColor: 'yellowgreen'
      }}>        
        <div style={{
          color: themeState.primaryTextColor,
          fontSize: '0.8em'
        }}>
          {startTime} - {endTime}
        </div>
      </div>      

      <div style={{color: themeState.primaryTextColor}}>
        <div style={{marginBottom: '10px', marginTop: '10px'}}>USER_NAME</div>
        <div>{message}</div>
      </div>
      <hr style={{color: themeState.primaryTextColor, opacity: 0.6}}/>
    </div>
  )
}

export default Comment;