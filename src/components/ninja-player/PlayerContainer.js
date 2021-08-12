import React, {useState, useEffect} from 'react';
import {useAtom} from "jotai"
const axios = require('axios');
import {episodesAtom, playingIdAtom, playerSkinAtom, tabAtom} from './jotai'
import Metas from './Metas'
import Artwork from './Artwork';
import PlayerControl from './PlayerControl'
import ChaptersList from './ChaptersList'
import VolumeControls from './VolumeControls'

const PlayerContainer = () => {
  const [episodes] = useAtom(episodesAtom);
  const [playingId] = useAtom(playingIdAtom)
  const [playerSkin] = useAtom(playerSkinAtom);
  const [, setTabName] = useAtom(tabAtom);

  
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
        <ChaptersList/>
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