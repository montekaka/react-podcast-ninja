import React, {useRef, useEffect} from 'react'
import {useAtom} from "jotai"
import ReactPlayer from 'react-player'
import {
  enclosureUrlAtom,
  updatePlayerAtom,
  commentAtom
} from './jotai'
import './light-playerholder.css'

const PlayIconPlaceholder = ({id}) => {

  return (
    <span id={id}/>
  )
}

const LightPlayerHolder = () => {
  
  const [playerState, updatePlayer] = useAtom(updatePlayerAtom);
  const [url] = useAtom(enclosureUrlAtom);
  const [comment] = useAtom(commentAtom);
  const {endSecond} = comment;

  const playIconId = 'light-play-icon'

  useEffect(() => {
    updatePlayer({playIconId})
  }, [])
  
  if(playerState && url && url.length > 0) {
    return (
      <ReactPlayer  
        height={"0px"}
        width={"0px"} 
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
        onError={(err) =>{ 
          // TODO: some sort of callback
          console.log('can not load', err);
        }}
        onEnded={() => {
          updatePlayer({playing: false})
        }}
        onProgress={(res) => {
          if(playerState.onSeeking === false) {
            const playedSeconds = res.playedSeconds;
            updatePlayer({playedSeconds})
          }
          // stop playing when the play time hit the comment end second
          if(res.playedSeconds >= endSecond && playerState.playCommentSection) {
            const playedSeconds = res.playedSeconds;
            updatePlayer({playedSeconds, playing: false})
          }
        }}        
      />
    )
  }

  return null;
}

export default LightPlayerHolder;