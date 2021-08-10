import React from 'react';
import { Play, Pause } from 'react-feather';
import {useAtom} from "jotai"
import { playerAtom, togglePlayPauseAtom, playerSkinAtom} from './jotai'

const PlayPauseButton = () => {

  const [playerState] = useAtom(playerAtom);
  const {playing} = playerState;
  
  const [, togglePlayPause] = useAtom(togglePlayPauseAtom);
  const [playerSkin] = useAtom(playerSkinAtom);
  
  return (
    <div 
      onClick={togglePlayPause}
      className="play-pause-button" 
      style={{background: playerSkin.primaryButtonColor}}
    >
      {playing ? <Pause style={{color: playerSkin.primaryTextColor}} className="icon"/> : <Play style={{color: playerSkin.primaryTextColor}} className="icon"/>}
    </div>    
  )
}

export default PlayPauseButton