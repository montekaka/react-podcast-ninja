import React from 'react';
import {useAtom} from "jotai"
import {configsAtom, updatePlayedTimeAtom, updatePlayerAtom} from './jotai'
import {getHHMMSSFromSeconds} from './libs'
// import ProgressControlSlider from './ProgressControlSlider'

const ProgressControl = (props) => {
  const [playerSkin] = useAtom(configsAtom)
  const [playerState, updatePlayer] = useAtom(updatePlayerAtom);
  const {durationSeconds, playedSeconds, playerRef, onReady} = playerState;
  const [, updatePlayedTime] = useAtom(updatePlayedTimeAtom)

  return (
    <div className={`bh-player-progress-container`}>
      <div className={`bh-player-progress-content`}>
        {props.children}
        <div className="bn-playing-time-label">
          <div>{getHHMMSSFromSeconds(playedSeconds)}</div>
          <div>{getHHMMSSFromSeconds(durationSeconds)}</div>
        </div>
      </div>
    </div>
  )
}

export default ProgressControl