import React from 'react';
import { Play, Pause } from 'react-feather';
import {useAtom} from "jotai"
import { playerAtom, togglePlayPauseAtom, playerSkinAtom, themeNameAtom} from './jotai'

const PlayPauseButton = () => {

  const [playerState] = useAtom(playerAtom);
  const [themeName] = useAtom(themeNameAtom);
  const {playing} = playerState;
  
  const [, togglePlayPause] = useAtom(togglePlayPauseAtom);
  const [playerSkin] = useAtom(playerSkinAtom);
  
  return (
    <div 
      onClick={togglePlayPause}
      className={`${themeName}-play-pause-button`}
      style={{background: playerSkin.primaryButtonColor}}
    >
      {playing ? <Pause style={{color: playerSkin.primaryBackgroundColor}} className="icon"/> : <Play style={{color: playerSkin.primaryBackgroundColor}} className="icon"/>}
    </div>    
  )
}

export default PlayPauseButton