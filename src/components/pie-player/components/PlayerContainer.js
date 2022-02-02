import React from 'react';
import ReactPlayer from 'react-player'
import {useAtom} from "jotai"
import {upatePlayerAtom} from '../jotai'

export default function PlayerContainer() {

  const [playerState, setPlayerState] = useAtom(upatePlayerAtom);
  const {url} = playerState;

  return (
    <ReactPlayer 
      url={url}
      width={"100%"}
      height={"20px"}
      controls={true}
    />
  )
}

