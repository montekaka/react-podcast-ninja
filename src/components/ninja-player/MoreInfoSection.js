import React from 'react';
import {useAtom} from "jotai"
import {episodesAtom, playingIdAtom, playerSkinAtom} from './jotai'
import MoreInfoSectionHeader from './MoreInfoSectionHeader'

const MoreInfoSection = () => {

  const [playerSkin] = useAtom(playerSkinAtom);
  const [episodes] = useAtom(episodesAtom);
  const [playingId] = useAtom(playingIdAtom);
  
  if(episodes.length > 0) {
    const {title, link, description} = episodes[playingId];

    const openLink = () => {
      window.open(link, '_blank')
    }

    return (
      <div className="jc-more-info" style={{
        backgroundColor: playerSkin.primaryBackgroundColor,
        color: playerSkin.primaryTextColor
      }}>
        <MoreInfoSectionHeader>
          <div className="js-more-info-title" style={{
            color: playerSkin.primaryTextColor
          }}>{title}</div>
          {link ? <div className="js-more-info-link" style={{color: playerSkin.primaryTextColor}} onClick={openLink}>View the website</div> : null}
        </MoreInfoSectionHeader>
        <div>
          {description ? <div dangerouslySetInnerHTML={{__html: description}}></div> : null}
        </div>
      </div>
    )
  }

  return null;
}

export default MoreInfoSection;