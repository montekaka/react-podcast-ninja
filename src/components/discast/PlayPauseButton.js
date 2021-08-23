import React from 'react';
import {useAtom} from 'jotai'
import {
  enclosureUrlAtom,
  playerAtom,
  togglePlayPauseAtom
} from './jotai'

const PlayPuaseButton = () => {
  const [playerState, togglePlayPause] = useAtom(togglePlayPauseAtom);

  return (
    <div onClick={togglePlayPause} className="bh-main-play-pause-button">
      Play
    </div>
  )  

}

export default PlayPuaseButton