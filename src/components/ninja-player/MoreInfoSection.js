import React from 'react';
import styled from 'styled-components';
import {useAtom} from "jotai"
import {episodesAtom, playingIdAtom, playerSkinAtom, themeNameAtom} from './jotai'
import MoreInfoSectionHeader from './MoreInfoSectionHeader'

const MoreInfoSection = () => {

  const [playerSkin] = useAtom(playerSkinAtom);
  const [episodes] = useAtom(episodesAtom);
  const [playingId] = useAtom(playingIdAtom);
  const [themeName] = useAtom(themeNameAtom);
  
  const Description = styled.div`
    a {
      color: ${playerSkin.primaryTextColor};
      opacity: 0.8;
    }
  `;  
  
  if(episodes.length > 0) {
    const {title, link, description} = episodes[playingId];

    const openLink = () => {
      window.open(link, '_blank')
    }

    return (
      <div className={`${themeName}-more-info`} style={{
        backgroundColor: playerSkin.primaryBackgroundColor,
        color: playerSkin.primaryTextColor
      }}>
        <MoreInfoSectionHeader>
          <div className={`${themeName}-more-info-title`}style={{
            color: playerSkin.primaryTextColor
          }}>{title}</div>
          {link ? <div className={`${themeName}-more-info-link`} style={{color: playerSkin.primaryTextColor}} onClick={openLink}>View the website</div> : null}
        </MoreInfoSectionHeader>
        <div className={`${themeName}-more-info-descripion`}>
          {description ? <Description dangerouslySetInnerHTML={{__html: description}} style={{color: playerSkin.primaryTextColor, link}}></Description> : null}
        </div>
      </div>
    )
  }

  return null;
}

export default MoreInfoSection;