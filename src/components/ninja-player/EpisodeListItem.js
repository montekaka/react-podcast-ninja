import React from 'react'
import {useAtom} from "jotai"
import {format} from 'date-fns'
import {playerSkinAtom, themeNameAtom} from './jotai'
import WaveSvg from './WaveSvg'

const EpisodeListItem = (props) => {
  const {pubDate, id, title, onClick} = props;
  const [playerSkin] = useAtom(playerSkinAtom)
  const {hidePubDate} = playerSkin
  const [themeName] = useAtom(themeNameAtom);
  
  return (
    <div className={`${themeName}-item`} onClick={() => {
      onClick(id);
      }}
    >
      {hidePubDate ? null : <div className={`${themeName}-subtitle`}>{pubDate ? <div>{format(new Date(pubDate), 'MM/dd/yyyy')}</div> : null}</div>}
      <div className={`${themeName}-title`}>{title}</div>    
    </div>
  )

}

export default EpisodeListItem;