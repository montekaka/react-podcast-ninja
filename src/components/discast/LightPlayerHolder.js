import React, {useRef, useEffect} from 'react'
import {useAtom} from "jotai"
import ReactPlayer from 'react-player'
import {
  playerAtom,
  enclosureUrlAtom,
  updatePlayerAtom
} from './jotai'

const PlayIconPlaceholder = ({id}) => {

  return (
    <div id={id}></div>
  )
}

const LightPlayerHolder = () => {
  
  const [playerState, updatePlayer] = useAtom(updatePlayerAtom);
  const [url] = useAtom(enclosureUrlAtom);
  const playIconId = 'light-play-icon'

  useEffect(() => {
    updatePlayer({playIconId})
  }, [])
  
  if(playerState && url && url.length > 0) {
    return (
      <ReactPlayer  
        height={"20px"}
        width={"100%"} 
        controls={true}        
        url={url}
        playIcon={<PlayIconPlaceholder id={playIconId}/>} // to hide the play icon
        light={true} // set light to true, so that we will not pre-load the file
        playing={playerState.playing}
        onReady={(res) => {
          if(res) {
            updatePlayer({
              onReady: true, 
              durationSeconds: res.getDuration(),
              playerRef: res
            })
          }
        }}        
      />
    )
  }

  return null;
}

export default LightPlayerHolder;