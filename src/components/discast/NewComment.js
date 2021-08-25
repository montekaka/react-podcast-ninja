import React, {useEffect} from 'react';
import {useAtom} from "jotai"
import ProgressControlSlider from './ProgressControlSlider'
import PlayPauseButton from './PlayPauseButton'
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

  return (
    <div>
      <div style={{display: 'flex'}}>
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
            justifyContent: 'space-between'
          }}>
            <div>{getHHMMSSFromSeconds(playedSeconds)}</div>
            <div>{getHHMMSSFromSeconds(durationSeconds)}</div>
          </div>
          <ProgressControlSlider/>
        </div>        
      </div>
      <div>
        <input placeholder="00:00"/>
        <input placeholder="00:00"/>
      </div>
      <div>
        <textarea type="textarea" rows="5" 
          style={{
            width: "100%", 
            borderRadius: "8px"
          }}/>
      </div>
    </div>
  )
}

export default NewComment;