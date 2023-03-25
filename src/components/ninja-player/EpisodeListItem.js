import React from 'react'
import {useAtom} from "jotai"
import {format} from 'date-fns'
import {playerSkinAtom, themeNameAtom} from './jotai'
import WaveSvg from './WaveSvg'

const EpisodeListItem = React.forwardRef((props, ref) => {
  const {pubDate, id, title, onClick} = props;
  const [playerSkin] = useAtom(playerSkinAtom)
  const {hidePubDate} = playerSkin
  const [themeName] = useAtom(themeNameAtom);

  const body = (
    <>
      {hidePubDate ? null : <div className={`${themeName}-subtitle`}>{pubDate ? <div>{format(new Date(pubDate), 'MM/dd/yyyy')}</div> : null}</div>}
      <div className={`${themeName}-title`}>{title}</div>    
    </>
  )
  const content = ref ? (
    <div ref={ref} className={`${themeName}-item`} onClick={() => {
      onClick(id);
      }}
    >
      {body}
    </div>
  ) : (
    <div className={`${themeName}-item`} onClick={() => {
      onClick(id);
      }}
    >
      {body}
    </div>
  )

  return content;
})

export default EpisodeListItem;