import React, {useEffect} from 'react';
import {useAtom} from "jotai"
import ProgressControlSlider from './ProgressControlSlider'
import ProgressControlSliderBookmark from './ProgressControlSliderBookmark'
import PlayPauseButton from './PlayPauseButton'
import TimeInputBox from './TimeInputBox'
import Artwork from './Artwork'
import MessagePlayPreviewButton from './MessagePlayPreviewButton';
import {getHHMMSSFromSeconds} from './libs'
import {
  configsAtom,
  playerAtom,
  metasAtom,
  updateNewCommentAtom,
  cancelCommentAtom,
  addCommentAtom,
  commentAtom
} from './jotai'

const NewComment = () => {
  const [metaState] = useAtom(metasAtom);
  const [playerState] = useAtom(playerAtom);
  const {durationSeconds, playedSeconds} = playerState;
  const [themeState] = useAtom(configsAtom)
  const [comment, setComment] = useAtom(commentAtom)
  const [, updateComment] = useAtom(updateNewCommentAtom)
  const [, cancelComment] = useAtom(cancelCommentAtom);
  const [, addComment] = useAtom(addCommentAtom);

  useEffect(() => {
    const startSecond = playedSeconds;
    const endSecond =  Math.min(playedSeconds + 120 , durationSeconds);
    const startTime = getHHMMSSFromSeconds(startSecond);
    const endTime = getHHMMSSFromSeconds(endSecond);
    setComment({
      startSecond,
      endSecond,
      startTime,
      endTime
    })
  }, [])


  const handleMessageChange = (e) => {
    const val = e.target.value;
    updateComment({message: val})
  }

  return (
    <div style={{
      height: '100vh',
      padding: '10px',
      backgroundColor: themeState.primaryBackgroundColor
    }}>
      <div style={{display: 'flex', marginBottom: 20}}>
        <Artwork src={metaState.src} style={{
          width: "40px",
          height: "40px",
          borderRadius: "4px"
        }}>
          <PlayPauseButton
            style={{
              width: "20px",
              height: "20px",
              height: "20px",
              fontSize: "10px"
            }}
            size="12"
          />
        </Artwork>
        <div style={{
          height: '40px',
          width: "100%", 
          marginLeft: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            display: 'flex',
            fontSize: "10px",
            justifyContent: 'space-between',
            color: themeState.primaryTextColor
          }}>
            <div>{getHHMMSSFromSeconds(playedSeconds)}</div>
            <div>{getHHMMSSFromSeconds(durationSeconds)}</div>
          </div>
          <ProgressControlSlider>
            <ProgressControlSliderBookmark/>
          </ProgressControlSlider>
        </div>
      </div>
      <div style={{
        marginBottom: "20px",         
        width: "100%", 
        height: '60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          width: "220px",
          height: '60px',
          justifyContent: 'space-between',
        }}>
          <TimeInputBox label="Start" id="startTime" placeholder="00:00:00"/>
          <TimeInputBox label="End" id="endTime" placeholder="00:00:00"/>          
        </div>
        <MessagePlayPreviewButton/>
      </div>
      <div>        
        <textarea type="textarea" rows="5"
          value={comment.message}
          onChange={handleMessageChange}
          placeholder="leave a comment" 
          style={{
            width: '100%',
            borderRadius: "8px",
            outline: "none",
            backgroundColor: themeState.primaryBackgroundColor,
            color: themeState.primaryTextColor
          }}/>
      </div>
      <div style={{display: 'flex', marginTop: "10px", justifyContent: 'flex-end'}}>

        <div style={{
          backgroundColor: themeState.primaryButtonColor, 
          color: themeState.primaryBackgroundColor,
          width: '80px',
          height: '30px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginRight: '10px'
        }}
          onClick={cancelComment}
        >Cancel</div>        
        <div style={{
          backgroundColor: themeState.primaryButtonColor, 
          color: themeState.primaryBackgroundColor,
          width: '80px',
          height: '30px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',          
        }}
          onClick={addComment}
        >Post</div>        
      </div>
    </div>
  )
}

export default NewComment;