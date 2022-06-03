import React, {useState, useEffect} from 'react';
import {useAtom} from "jotai"
import {episodesAtom, playingIdAtom, togglePlaybackRateAtom, 
  playerSkinAtom, tabAtom, tabsMenuAtom, themeNameAtom
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
  const [themeName] = useAtom(themeNameAtom)
  const [playerState, togglePlayerbackRate] = useAtom(togglePlaybackRateAtom);

  const {hideMoreInfo, primaryBackgroundColor, primaryTextColor} = playerSkin;
  
  if(playingId >= 0 && episodes && episodes.length > 0) {
    const episode = episodes[playingId];
    const {
      title, 
      podcastTitle, 
      artworkUrl, 
      chaptersUrl
    } = episode;
    
    return (
      <div className={`${themeName}-player-container`} style={{
        background: primaryBackgroundColor
      }}>
        <Artwork artworkUrl={artworkUrl}/>
        <Metas title={title} podcastTitle={podcastTitle}/>        
        <PlayerControl/>
        <ChaptersList/>
        <div className={`${themeName}-control-misc`}>
          <VolumeControls/>
          <div className={`${themeName}-control-tabs`}>
            <div
              onClick={togglePlayerbackRate}
              aria-label="Change speed"
              style={{
                borderColor: primaryTextColor,
                border: '1px solid',
                cursor: 'pointer',
                color: primaryTextColor,
                padding: '4px',
                width: "46px",
                textAlign: 'center',
                borderRadius: "8px"
              }}
            >{playerState.playbackRate}x</div>
            {
              tabsMenuState.map((menu) => {
                return (
                  <TabMenuItem
                    key={menu.id}
                    handleClick={setTabName}
                    color={primaryTextColor}
                    label={menu.label}
                    menuId={menu.id}
                  /> 
                )
              })
            }
            {
              !hideMoreInfo && <TabMenuItem
              handleClick={setTabName}
              color={primaryTextColor}
              label="MORE INFO"
              menuId="more-info"
            /> 
            }           
          </div>
        </div>
      </div>
    )

  }

  return null;  

}

export default PlayerContainer;