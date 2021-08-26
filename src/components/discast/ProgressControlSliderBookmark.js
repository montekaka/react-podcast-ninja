import React from 'react';
import {useAtom} from "jotai"
import {commentAtom, playerAtom} from './jotai'

const ProgressControlSliderBookmark = () => {

  const [playerState] = useAtom(playerAtom)
  const [comment] = useAtom(commentAtom);
  const {startSecond, endSecond} = comment;
  const {onReady, durationSeconds} = playerState;

  const handleplaceholder = () => {}

  if(onReady) {  
    return (
      <>
        <input 
          min={0} 
          max={durationSeconds} 
          step={0.01}
          value={startSecond} 
          onChange={handleplaceholder}     
          className={`bh-slider-bookmark`}
          type="range"
        />
        <input 
          min={0} 
          max={durationSeconds} 
          step={0.01}
          value={endSecond} 
          onChange={handleplaceholder}     
          className={`bh-slider-bookmark`}
          type="range"
        />         
      </>
    )
  }

  return null;
}

export default ProgressControlSliderBookmark;