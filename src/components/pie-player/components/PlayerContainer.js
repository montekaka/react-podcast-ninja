import React, {useEffect} from 'react';
import ReactPlayer from 'react-player'
import {useAtom} from "jotai"
import {upatePlayerAtom, setThemeAtom} from '../jotai'

export default function PlayerContainer({theme}) {

  const [playerState, setPlayerState] = useAtom(upatePlayerAtom);
  const {url, playing, volume, muted, onReady } = playerState;  
  const [_, setThemeState] = useAtom(setThemeAtom);
  
  useEffect(() => {
    if(theme) {
      setThemeState(theme);
    }
  }, [theme.toString()])

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

