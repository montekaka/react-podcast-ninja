import React from 'react';
import { useAtom } from 'jotai';
import {themeNameAtom} from './jotai'

const Artwork = ({artworkUrl}) => {
  const [themeName] = useAtom(themeNameAtom)
  return (
    <div className={`${themeName}-artwork`}>
      <img 
        className={`${themeName}-artwork-image`}
        src={artworkUrl} 
        title="artwork"
      />
    </div>
  )
}

export default Artwork;