import React from 'react';
import {useAtom} from 'jotai'
import { Play, Pause } from 'react-feather';
import {
  enclosureUrlAtom,
  playerAtom,
  configsAtom,
  togglePlayPauseAtom,
  messagePlayPreview,
  commentAtom
} from './jotai'

const MessagePlayPreviewButton = (props) => {
  const [playerState, togglePlayPause] = useAtom(messagePlayPreview);
  const {playing} = playerState;
  const [playerSkin] = useAtom(configsAtom);
  const {style, size} = props;

  // TODO: change the prview text to loading when the player is not yet ready
  return (
    <div onClick={togglePlayPause} 
      style={{
        backgroundColor: playerSkin.primaryButtonColor, 
        color: playerSkin.primaryBackgroundColor,
        width: '80px',
        height: '30px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        ...style
      }}
    >
      Preview
    </div>
  )  

}

export default MessagePlayPreviewButton