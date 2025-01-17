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
  }, [theme])

  return (
    <ReactPlayer
      url={url}
      autoPlay={true}
      width={"0%"}
      height={"0px"}
      controls={false}
      muted={muted}
      volume={volume}
      config={{
        file: {
          forceAudio: true,
          attributes: {
            preload: "none"
          }
        }
      }}
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

