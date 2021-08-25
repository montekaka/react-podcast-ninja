import React, {useEffect} from 'react';
import {useAtom} from "jotai"
import ProgressControlSlider from './ProgressControlSlider'
import PlayPauseButton from './PlayPauseButton'
import Artwork from './Artwork'
import {
  configsAtom,
  playerAtom,
  metasAtom,
  togglePlayPauseAtom,
  updatePlayedTimeAtom
} from './jotai'

const NewComment = () => {
  const [metaState] = useAtom(metasAtom);

  return (
    <div>
      <div>
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
        <ProgressControlSlider/>
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