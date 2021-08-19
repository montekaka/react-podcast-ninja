import React from 'react'
import {playerSkinAtom, themeNameAtom} from './jotai'
import {useAtom} from "jotai"

const Metas = (props) => {
  const {podcastTitle, title} = props;
  const [playerSkin] = useAtom(playerSkinAtom)
  const [themeName] = useAtom(themeNameAtom)

  return (
    <div className={`${themeName}-metas`} style={{
      color: playerSkin.primaryTextColor
    }}>
      <div className={`${themeName}-subtitle`}>{podcastTitle}</div>
      <div className={`${themeName}-title`}>{title}</div>
      {props.children}
    </div>
  )
}

export default Metas;