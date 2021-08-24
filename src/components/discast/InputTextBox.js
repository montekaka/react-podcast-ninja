import React from 'react';
import {useAtom} from "jotai"
import {Send} from 'react-feather'
import {configsAtom} from './jotai'

const InputTextBox = () => {
  const [playerSkin] = useAtom(configsAtom);
  
  return (
    <div className="bh-input-text-box">
      <div className="bh-input-placeholder" style={{borderColor: playerSkin.primaryButtonColor}}>
        <p style={{borderColor: playerSkin.primaryTextColor, opacity: 0.7}}>Write a comment</p>
      </div>
      <div className="bn-input-send-button">
        <Send style={{color: playerSkin.primaryButtonColor}}/>
      </div>
    </div>
  )
}

export default InputTextBox;