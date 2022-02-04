import React from 'react';
import {useAtom} from "jotai"
import {playerAtom} from '../jotai'
import { Play, Pause } from 'react-feather';

export default function PlayPauseButton(props) {
  const {idx} = props;
  const [playerState] = useAtom(playerAtom);  
  const {playing, playingId} = playerState;
  
  if(playing === true && playingId > -1 && playingId === idx) {
    // console.log('no')
    return <Pause/>
  } else {
    return <Play/>
  }

}
