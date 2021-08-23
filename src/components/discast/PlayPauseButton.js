import React from 'react';
import {useAtom} from 'jotai'
import { Play, Pause } from 'react-feather';
import {
  enclosureUrlAtom,
  playerAtom,
  configsAtom,
  togglePlayPauseAtom
} from './jotai'

const PlayPuaseButton = () => {
  const [playerState, togglePlayPause] = useAtom(togglePlayPauseAtom);
  const {playing} = playerState;
  const [playerSkin] = useAtom(configsAtom);

  return (
    <div onClick={togglePlayPause} 
      className="bh-main-play-pause-button"
      style={{background: playerSkin.primaryButtonColor}}
    >
      {playing ? <Pause style={{color: playerSkin.primaryBackgroundColor}} className="icon"/> : <Play style={{color: playerSkin.primaryBackgroundColor}} className="icon"/>}
    </div>
  )  

}

export default PlayPuaseButton