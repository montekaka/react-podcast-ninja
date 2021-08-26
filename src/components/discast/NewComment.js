import React, {useEffect} from 'react';
import {useAtom} from "jotai"
import ProgressControlSlider from './ProgressControlSlider'
import PlayPauseButton from './PlayPauseButton'
import TimeInputBox from './TimeInputBox'
import Artwork from './Artwork'
import {getHHMMSSFromSeconds} from './libs'
import {
  configsAtom,
  playerAtom,
  metasAtom,
  togglePlayPauseAtom,
  updatePlayedTimeAtom
} from './jotai'

const NewComment = () => {
  const [metaState] = useAtom(metasAtom);
  const [playerState] = useAtom(playerAtom);
  const {durationSeconds, playedSeconds} = playerState;
  const [themeState] = useAtom(configsAtom)

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
          <ProgressControlSlider/>
        </div>
      </div>
      <div style={{marginBottom: "40px"}}>
        <div style={{
          display: 'flex',
          width: "300px",
          justifyContent: 'space-between'
        }}>
          <TimeInputBox label="Start" id="startTime" placeholder="00:00:00"/>
          <TimeInputBox label="End" id="endTime" placeholder="00:00:00"/>
        </div>
      </div>
      <div>        
        <textarea type="textarea" rows="5"
          placeholder="leave a comment" 
          style={{
            width: "100%", 
            borderRadius: "8px",
            outline: "none",
            backgroundColor: themeState.primaryBackgroundColor,
            color: themeState.primaryTextColor
          }}/>
      </div>
    </div>
  )
}

export default NewComment;