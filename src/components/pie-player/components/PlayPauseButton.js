import React from 'react';
import {useAtom} from "jotai"
import {playerAtom} from '../jotai'
import { Play, Pause } from 'react-feather';

const PlayPauseIcon = ({playing, playingId, idx}) => {

  if(playing === true && playingId > -1 && playingId === idx) {
    return <Pause className='button'/>
  } else {
    return <Play className='button'/>
  }
}

export default function PlayPauseButton(props) {
  const {idx, onClick} = props;
  const [playerState] = useAtom(playerAtom);  
  const {playing, playingId} = playerState;
  
  return (
    <div className='jc-player-pp-button-container'>
      <div onClick={onClick} className='pp-button'>
        <PlayPauseIcon playingId={playingId} playing={playing} idx={idx}/>
      </div>      
    </div>
  )  
}
