import React from 'react';
import {useAtom} from 'jotai'
import { Play, Pause } from 'react-feather';
import {
  enclosureUrlAtom,
  playerAtom,
  configsAtom,
  togglePlayPauseAtom
} from './jotai'

const PlayPauseButton = (props) => {
  const [playerState, togglePlayPause] = useAtom(togglePlayPauseAtom);
  const {playing} = playerState;
  const [playerSkin] = useAtom(configsAtom);
  const {style, size} = props;

  return (
    <div onClick={togglePlayPause} 
      className="bh-main-play-pause-button"
      style={{background: playerSkin.primaryButtonColor, ...style}}
    >
      {playing ? <Pause style={{color: playerSkin.primaryBackgroundColor}} className="icon" size={size ? size : 24}/> : <Play style={{color: playerSkin.primaryBackgroundColor}} className="icon" size={size ? size : 24}/>}
    </div>
  )  

}

export default PlayPauseButton