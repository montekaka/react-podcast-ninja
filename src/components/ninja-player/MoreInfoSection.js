import React from 'react';
import {useAtom} from "jotai"
import {episodesAtom, playingIdAtom, playerSkinAtom, themeNameAtom} from './jotai'
import MoreInfoSectionHeader from './MoreInfoSectionHeader'

const MoreInfoSection = () => {

  const [playerSkin] = useAtom(playerSkinAtom);
  const [episodes] = useAtom(episodesAtom);
  const [playingId] = useAtom(playingIdAtom);
  const [themeName] = useAtom(themeNameAtom);
  
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
          {description ? <div dangerouslySetInnerHTML={{__html: description}}></div> : null}
        </div>
      </div>
    )
  }

  return null;
}

export default MoreInfoSection;