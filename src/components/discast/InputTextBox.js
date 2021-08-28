import React from 'react';
import {useAtom} from "jotai"
import {Send} from 'react-feather'
import {configsAtom, updateScreenAtom} from './jotai'

const InputTextBox = () => {
  const [playerSkin] = useAtom(configsAtom);
  const [, updateScreen] = useAtom(updateScreenAtom);

  const handleClick = () => {
    updateScreen('new-comment');
  }

  return (
    <div className="bh-input-text-box">
      <div className="bh-input-placeholder" 
        onClick={handleClick}
        style={{borderColor: playerSkin.primaryButtonColor}}>
        <p style={{borderColor: playerSkin.primaryTextColor, opacity: 0.7}}>Write a comment</p>
      </div>
      <div className="bn-input-send-button">
        <Send style={{color: playerSkin.primaryButtonColor}}/>
      </div>
    </div>
  )
}

export default InputTextBox;