import React, {useEffect} from 'react';
import ReactPlayer from 'react-player'
import {useAtom} from "jotai"
import {upatePlayerAtom} from '../jotai'

export default function PlayerContainer() {

  const [playerState, setPlayerState] = useAtom(upatePlayerAtom);
  const {url, playing, volume, muted, onReady } = playerState;  
  
  // useEffect(() => {
  //   if(onReady && playing) {
  //     setTimeout(() => {
  //       setPlayerState({muted: false, playing: true})
  //     }, 500)      
  //   }
  // }, [onReady, playing])

  return (
    <ReactPlayer 
      url={url}
      autoPlay={true}
      width={"100%"}
      height={"20px"}
      controls={true}
      muted={muted}
      volume={volume}
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

