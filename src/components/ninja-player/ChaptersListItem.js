import React from 'react'
import {getHHMMSSFromSeconds} from './libs'
import {useAtom} from "jotai"
import {playerSkinAtom} from './jotai'

const ChaptersListItem = (props) => {
  const {title, startTime, id, onClick} = props;
  const [playerSkin] = useAtom(playerSkinAtom)

  return (
    <div className="jc-chapter" onClick={() => {
      onClick(id);
      }}
      style={{
        backgroundColor: playerSkin.chapterBackgroundColor,
        color: playerSkin.chapterTextColor
      }}
    >
      <div className="jc-chapter-title">{title}</div>
      <div className="jc-chapter-subtitle">{getHHMMSSFromSeconds(startTime)}</div>
    </div>
  )
}

export default ChaptersListItem;