import React from 'react';
import {useAtom} from "jotai"
import {configsAtom, updatePlayerAtom} from './jotai'

const ProgressControlSlider = () => {
  const [playerSkin] = useAtom(configsAtom)
  const [playerState, updatePlayer] = useAtom(updatePlayerAtom);
  const {durationSeconds, playedSeconds, playerRef, onReady} = playerState;  
  return (
    <div className={`bh-slide-container`}>
      <input 
        type="range" 
        min={0} 
        max={durationSeconds} 
        step={0.01}
        value={playedSeconds}
        onMouseDown={() => {
          updatePlayer({onSeeking: true})
        }}
        onMouseUp={() => {
          if(onReady) {
            playerRef.seekTo(playedSeconds)
            updatePlayer({onSeeking: false})
          } 
          // todo, handle the player has not yet ready
          // just update the played secs
        }}
        onChange={(e) => {
          updatePlayer({playedSeconds: Number(e.target.value)})
        }}
        className={`bh-slider`}
        id="time-progress-bar"
        style={{
          background: `linear-gradient(90deg, ${playerSkin.progressBarFilledColor} ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}%, ${playerSkin.progressBarBackgroundColor} ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}% )`
        }}
      />
    </div>    
  )
}

export default ProgressControlSlider;