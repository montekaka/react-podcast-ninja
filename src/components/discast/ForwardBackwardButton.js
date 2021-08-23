import React from 'react';
import {useAtom} from "jotai"
import {configsAtom} from './jotai'

const ForwardBackwardButton = (props) => {
  const {label, onClick, id} = props;
  const [playerSkin] = useAtom(configsAtom);
  
  return (
    <div className={`bh-forward-backward-button`} id={id} onClick={onClick}>
      {props.children}
      <div className={`bh-button-label`} style={{
        color: playerSkin.primaryButtonColor
      }}>{label}</div>      
    </div>
  )
}

export default ForwardBackwardButton;