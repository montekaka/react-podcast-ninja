import React, {useState, useEffect} from 'react';
import {useAtom} from "jotai"
const axios = require('axios');
import {episodesAtom, playingIdAtom, playerSkinAtom, tabAtom} from './jotai'
import Metas from './Metas'
import Artwork from './Artwork';
import PlayerControl from './PlayerControl'
import ChaptersList from './ChaptersList'
import VolumeControls from './VolumeControls'

const PlayerContainer = ({playerId}) => {
  const [episodes] = useAtom(episodesAtom);
  const [playingId] = useAtom(playingIdAtom)
  const [playerSkin] = useAtom(playerSkinAtom);
  const [chapters, setChapters] = useState([]);
  const [, setTabName] = useAtom(tabAtom);

  useEffect(() => {        
    if(playerId && playingId >= 0 && episodes && episodes.length && episodes[playingId] && episodes[playingId].chaptersUrl) {
      const url = episodes[playingId].chaptersUrl;
      axios.get(url).then((res) => {
        const data = res.data;
        if(data.chapters && data.chapters.length > 0) {
          setChapters(data.chapters)
        } else {
          console.log(`empty...., playingId: ${playingId}, playerId: ${playerId}`)
          setChapters([]);
        }
      })
      .catch((err) => {
        setChapters([]);
        console.log(err)
      })      
    } else {
      console.log(`nothing happening...., playingId: ${playingId}, playerId: ${playerId}`)
      console.log(episodes[playingId])
      setChapters([])
    }    
  }, [playerId, playingId, episodes[playingId]])
  
  if(playingId >= 0 && episodes && episodes.length > 0) {
    const episode = episodes[playingId];
    const {
      title, 
      podcastTitle, 
      artworkUrl, 
      chaptersUrl
    } = episode;
    
    return (
      <div className="jc-player-container" style={{
        background: playerSkin.primaryBackgroundColor
      }}>
        <Artwork artworkUrl={artworkUrl}/>
        <Metas title={title} podcastTitle={podcastTitle}/>        
        <PlayerControl/>
        <ChaptersList chapters={chapters}/>
        <div className="jc-control-misc">
          <VolumeControls/>
          <div className="js-control-tabs">
            <div  
              onClick={() => {
                setTabName('more-info')
              }}             
              style={{
                cursor: 'pointer',
                color: playerSkin.primaryTextColor
              }}>MORE INFO</div>
          </div>          
        </div>       
      </div>
    )

  }

  return null;  

}

export default PlayerContainer;