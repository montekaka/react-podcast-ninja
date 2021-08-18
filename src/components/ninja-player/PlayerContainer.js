import React, {useState, useEffect} from 'react';
import {useAtom} from "jotai"
import {episodesAtom, playingIdAtom, 
  playerSkinAtom, tabAtom, tabsMenuAtom
} from './jotai'
import Metas from './Metas'
import Artwork from './Artwork';
import PlayerControl from './PlayerControl'
import ChaptersList from './ChaptersList'
import VolumeControls from './VolumeControls'
import TabMenuItem from './TabMenuItem'

const PlayerContainer = () => {
  const [episodes] = useAtom(episodesAtom);
  const [playingId] = useAtom(playingIdAtom)
  const [playerSkin] = useAtom(playerSkinAtom);
  const [, setTabName] = useAtom(tabAtom);
  const [tabsMenuState] = useAtom(tabsMenuAtom);
  
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
            {
              tabsMenuState.map((menu) => {
                return (
                  <TabMenuItem
                    key={menu.id}
                    handleClick={setTabName}
                    color={playerSkin.primaryTextColor}
                    label={menu.label}
                    menuId={menu.id}
                  /> 
                )
              })
            }
            <TabMenuItem
              handleClick={setTabName}
              color={playerSkin.primaryTextColor}
              label="MORE INFO"
              menuId="more-info"
            />            
          </div>
        </div>
      </div>
    )

  }

  return null;  

}

export default PlayerContainer;