import React from 'react';
import {useAtom} from "jotai"
import {configsAtom, playerAtom} from './jotai'
import {getHHMMSSFromSeconds} from './libs'

const ProgressControl = () => {
  const [playerSkin] = useAtom(configsAtom)
  const [playerState] = useAtom(playerAtom);
  const {durationSeconds, playedSeconds} = playerState

  // const durationSeconds = 1000;
  // const playedSeconds = 1;

  return (
    <div className={`bh-player-progress-container`}>
      <div className={`bh-player-progress-content`}>
        <div className={`bh-slide-container`}>
          <input 
            type="range" 
            min={0} 
            max={durationSeconds} 
            step={0.01}
            value={playedSeconds}
            onMouseDown={() => {
              // updatePlayer({onSeeking: true})
            }}
            onMouseUp={() => {
              // playerRef.seekTo(playedSeconds)
              // updatePlayer({onSeeking: false})
            }}
            onChange={(e) => {
              // updatePlayer({playedSeconds: Number(e.target.value)})
            }}
            className={`bh-slider`}
            id="time-progress-bar"
            style={{
              background: `linear-gradient(90deg, ${playerSkin.progressBarFilledColor} ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}%, ${playerSkin.progressBarBackgroundColor} ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}% )`
            }}
          />
        </div>
        <div className="bn-playing-time-label">
          <div>{getHHMMSSFromSeconds(playedSeconds)}</div>
          <div>{getHHMMSSFromSeconds(durationSeconds)}</div>
        </div>
      </div>
    </div>
  )
}

export default ProgressControl