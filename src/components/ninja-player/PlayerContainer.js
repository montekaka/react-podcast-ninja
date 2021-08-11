import React, {useState, useEffect} from 'react';
import {useAtom} from "jotai"
import axios from 'axios'
import {episodesAtom, playingIdAtom, playerSkinAtom} from './jotai'
import Metas from './Metas'
import Artwork from './Artwork';
import PlayerControl from './PlayerControl'
import ChaptersList from './ChaptersList'

const PlayerContainer = () => {
  const [episodes] = useAtom(episodesAtom);
  const [playingId] = useAtom(playingIdAtom)
  const [playerSkin] = useAtom(playerSkinAtom);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {    
    if(playingId >= 0 && episodes && episodes.length && episodes[playingId] && episodes[playingId].chaptersUrl) {
      const url = episodes[playingId].chaptersUrl;
      axios.get(url).then((res) => {
        const data = res.data;
        if(data.chapters && data.chapters.length > 0) {
          setChapters(data.chapters)
        } else {
          setChapters([]);
        }
      })
      .catch((err) => {
        setChapters([]);
        console.log(err)
      })      
    } else {
      setChapters([])
    }
  }, [playingId])
  
  if(playingId >= 0 && episodes && episodes.length > 0) {
    const episode = episodes[playingId];
    const {title, podcastTitle, artworkUrl, chaptersUrl} = episode;
    
    return (
      <div className="jc-player-container" style={{
        background: playerSkin.primaryBackgroundColor
      }}>
        <Artwork artworkUrl={artworkUrl}/>
        <Metas title={title} podcastTitle={podcastTitle}/>        
        <PlayerControl/>
        <ChaptersList chapters={chapters}/>
      </div>
    )

  }

  return null;  

}

export default PlayerContainer;