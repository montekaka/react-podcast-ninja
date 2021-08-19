import React from 'react';
import {useAtom} from "jotai"
import { playerSkinAtom, themeNameAtom} from './jotai'

const ProgressChangeButton = (props) => {
  const {label, onClick} = props;
  const [playerSkin] = useAtom(playerSkinAtom);
  const [themeName] = useAtom(themeNameAtom);

  return (
    <div className={`${themeName}-progress-control`} onClick={onClick}>
      {props.children}
      <div className={`${themeName}-label`} style={{
        color: playerSkin.primaryButtonColor
      }}>{label}</div>
    </div>
  )
}

export default ProgressChangeButton;