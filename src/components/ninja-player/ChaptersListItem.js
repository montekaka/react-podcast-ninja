import React from 'react'
import {getHHMMSSFromSeconds} from './libs'
import {useAtom} from "jotai"
import {playerSkinAtom, themeNameAtom} from './jotai'

const ChaptersListItem = (props) => {
  const {title, startTime, id, onClick} = props;
  const [playerSkin] = useAtom(playerSkinAtom);
  const [themeName] = useAtom(themeNameAtom)

  return (
    <div className={`${themeName}-chapter`} onClick={() => {
      onClick(id);
      }}
      style={{
        backgroundColor: playerSkin.chapterBackgroundColor,
        color: playerSkin.chapterTextColor
      }}
    >
      <div className={`${themeName}-chapter-title`}>{title}</div>
      <div className={`${themeName}-chapter-subtitle`}>{getHHMMSSFromSeconds(startTime)}</div>
    </div>
  )
}

export default ChaptersListItem;