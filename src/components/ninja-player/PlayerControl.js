import React from 'react';
import {RotateCcw, RotateCw} from 'react-feather'
import {useAtom} from "jotai"
import { playerAtom, updatePlayerAtom, updatePlayedTimeAtom, themeNameAtom, playerSkinAtom} from './jotai'
import PlayPauseButton from "./PlayPauseButton";
import ProgressChangeButton from './ProgressChangeButton'
import {getHHMMSSFromSeconds} from './libs'
// import styled, {css} from 'styled-components';

const PlayerControl = () => {
  const [playerState] = useAtom(playerAtom);
  const [, updatePlayer] = useAtom(updatePlayerAtom);
  const {durationSeconds, playedSeconds, playerRef} = playerState;
  const [, updatePlayedTime] = useAtom(updatePlayedTimeAtom)
  const [playerSkin] = useAtom(playerSkinAtom);
  const [themeName] = useAtom(themeNameAtom);

  return (
    <div className={`${themeName}-player-control`}>
      {/* <Camera style={{color: '#ACDAF5'}}/> */}
      <div className={`${themeName}-controls`}>
        <ProgressChangeButton label="5" 
          onClick={() => {
            updatePlayedTime(playedSeconds-5)
          }}
        >
          <RotateCcw className={`${themeName}-icon`}
            style={{
                color: playerSkin.primaryButtonColor
            }}
          />
        </ProgressChangeButton> 
        <PlayPauseButton/>
        <ProgressChangeButton label="30"
          onClick={() => {
            updatePlayedTime(playedSeconds+30)
          }}        
        >
          <RotateCw className={`${themeName}-icon`}
            style={{
              color: playerSkin.primaryButtonColor
            }}          
          />
        </ProgressChangeButton>                                
        {/* <ProgressBackward/>
        <ProgressForward/> */}
      </div>
      <div className={`${themeName}-progress-bar`}>
        <div className={`${themeName}-progress-time`} style={{
          color: playerSkin.primaryTextColor
        }}>
          <div className={`${themeName}-time`}>{getHHMMSSFromSeconds(playedSeconds)}</div>
          <div className={`${themeName}-time`}>{getHHMMSSFromSeconds(durationSeconds)}</div>
        </div>
        <div className={`${themeName}-slide-container`}>
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
              playerRef.seekTo(playedSeconds)
              updatePlayer({onSeeking: false})
            }}
            onChange={(e) => {
              updatePlayer({playedSeconds: Number(e.target.value)})
            }}
            className={`${themeName}-slider`}
            id="time-progress-bar"
            style={{
              background: `linear-gradient(90deg, ${playerSkin.progressBarFilledColor} ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}%, ${playerSkin.progressBarBackgroundColor} ${durationSeconds <= 1 ? 0 : playedSeconds * 100 / durationSeconds}% )`
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PlayerControl;