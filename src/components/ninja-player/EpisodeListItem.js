import React from 'react'
import {useAtom} from "jotai"
import {format} from 'date-fns'
import {playerSkinAtom} from './jotai'

const EpisodeListItem = (props) => {
  const {pubDate, id, title, onClick} = props;
  const [playerSkin] = useAtom(playerSkinAtom)
  const {hidePubDate} = playerSkin
  
  return (
    <div className="jc-item" onClick={() => {
      onClick(id);
      }}
    >
      {hidePubDate ? null : <div className="subtitle">{pubDate ? <div>{format(new Date(pubDate), 'MM/dd/yyyy')}</div> : null}</div>}
      <div className="title">{title}</div>
    </div>
  )

}

export default EpisodeListItem;