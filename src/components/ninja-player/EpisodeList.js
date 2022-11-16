import React, { useEffect } from 'react'
import {useAtom} from "jotai"
import { 
  episodesAtom, 
  updatePlayerAtom, 
  updatePlayingIdAtom, 
  playerSkinAtom,
  themeNameAtom
} from './jotai'
import EpisodeListItem from './EpisodeListItem'

const EpisodeList = () => {

  const [episodes] = useAtom(episodesAtom);
  const [themeName] = useAtom(themeNameAtom);
  const [, updatePlayer] = useAtom(updatePlayerAtom);
  const [, updatePlayingId] = useAtom(updatePlayingIdAtom);
  const [playerSkin] = useAtom(playerSkinAtom)

  const handleClick = (idx) => {
    updatePlayer({
      // playingId: idx, 
      // durationSeconds: 0,
      playedSeconds: 0,
      playing: true, 
      onReady: false
    })
    updatePlayingId(idx);
  }

  const style = { 
    backgroundColor: playerSkin.playlistBackgroundColor,
    color: playerSkin.playlistTextColor
  }

  if(playerSkin.playlistFullHeight) {
    style["maxHeight"] = "100%";
    style["overflow"] = "auto";
  }

  return (
    <div className={`${themeName}-episodes-list`} style={style}>
      {
        episodes.map((item, idx) => {
          return <EpisodeListItem key={(idx+1).toString()}
            title={item.title}
            pubDate={item.pubDate}
            id={idx}
            onClick={handleClick}
          />
        })
      }
    </div>
  )
}

export default EpisodeList;