import React from 'react'
import { Play, Pause } from 'react-feather';
import {useAtom} from "jotai"
import {playerSkinAtom, themeNameAtom} from './jotai'
import {getHHMMSSFromSeconds} from './libs'

const ChaptersListItem = (props) => {
  const {title, startTime, id, onClick} = props;
  const [playerSkin] = useAtom(playerSkinAtom);
  const [themeName] = useAtom(themeNameAtom)
  const playChapter = () => {
    onClick(id);
  }

  return (
    <div className={`${themeName}-chapter`}
      style={{
        backgroundColor: playerSkin.chapterBackgroundColor,
        color: playerSkin.chapterTextColor
      }}
    >
      <div className={`${themeName}-chapter-title`}>{title}</div>
      <div className={`${themeName}-chapter-footer`}>
        <div 
          onClick={playChapter}
          className={`${themeName}-chapter-play`}
          style={{background: playerSkin.primaryButtonColor, opacity: "0.7"}}
        >        
          <Play 
            style={{color: playerSkin.primaryBackgroundColor}} 
            size={14}
            className="icon"/>
        </div>
        <div className={`${themeName}-chapter-duration`}>{getHHMMSSFromSeconds(startTime)}</div>
      </div>      
    </div>
  )
}

export default ChaptersListItem;