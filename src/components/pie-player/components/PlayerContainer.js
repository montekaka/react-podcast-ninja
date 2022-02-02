import React from 'react';
import ReactPlayer from 'react-player'
import {useAtom} from "jotai"
import {upatePlayerAtom} from '../jotai'

export default function PlayerContainer() {

  const [playerState, setPlayerState] = useAtom(upatePlayerAtom);
  const {url, playing} = playerState;

  return (
    <ReactPlayer 
      url={url}
      width={"100%"}
      height={"20px"}
      controls={true}
      onError={(err) =>{ 
        // TODO: some sort of callback
        console.log('can not load', err);
      }}
      onProgress={(res) => {        
        const playedSeconds = res.playedSeconds;
        setPlayerState({playedSeconds})        
      }}
      onReady={(res) => {
        if(res) {
          setPlayerState({
            onReady: true, 
            durationSeconds: res.getDuration(),
            playerRef: res
          })
        }
      }}      
      playing={playing}       
    />
  )
}

