import React from 'react'
import {useAtom} from "jotai"
import { 
  episodesAtom, 
  updatePlayerAtom, 
  updatePlayingIdAtom, 
  playerSkinAtom,
} from './jotai'
import EpisodeListItem from './EpisodeListItem'

const EpisodeList = () => {

  const [episodes] = useAtom(episodesAtom);
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

  return (
    <div className="episodes-list" style={{
      // background: `linear-gradient(0deg, ${playerSkin.primaryBackgroundColor} ,${playerSkin.primaryBackgroundColor} 54px)`,
      backgroundColor: playerSkin.playlistBackgroundColor,
      color: playerSkin.playlistTextColor
    }}>
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