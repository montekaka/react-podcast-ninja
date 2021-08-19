import React from 'react'
import { themeNameAtom} from './jotai'
import {useAtom} from "jotai"

const RetroGrid = () => {
  const [themeName] = useAtom(themeNameAtom)
  
  if(themeName === 'retro') {
    return (
      <div className="retro-grid-container">
        <div className="retro-grid"></div>
      </div>
    )
  }

  return null;
}

export default RetroGrid;