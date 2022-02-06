import React from 'react';
import {useAtom} from "jotai"
import {playerAtom} from '../jotai'

const durationFormat = (sec) => {  
  const strTime = new Date(sec * 1000).toISOString();
  return strTime.slice(11,19);
}
// 1970-01-01T00:00:25.135Z

export default function PlayingDurationSec({idx, duration}) {
  const [playerState] = useAtom(playerAtom);
  const {playingId, playedSeconds, onReady, playing} = playerState;
  
  if(onReady && playing && (idx !== undefined || idx !== null) && playingId > -1 && playingId === idx) {
    const sec = durationFormat(playedSeconds);
    
    return (
      <div>{sec}</div>      
    )
  }

  return (
    <div>{duration}</div>    
  )
}
