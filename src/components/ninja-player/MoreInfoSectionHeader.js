import React from 'react';
import {useAtom} from "jotai"
import {XCircle} from 'react-feather'
import {tabAtom, playerSkinAtom, themeNameAtom} from './jotai'

const MoreInfoSectionHeader = (props) => {
  const [, setTabName] = useAtom(tabAtom);
  const [playerSkin] = useAtom(playerSkinAtom);
  const [themeName] = useAtom(themeNameAtom);

  return (
    <div className={`${themeName}-more-info-header`}>
      <div className={`${themeName}-more-info-header-meta`}>
        {props.children}
      </div>
      <div 
        onClick={() => {
          setTabName('main')
        }}
        style={{
          cursor: 'pointer',
        }}>
        <XCircle style={{color: playerSkin.primaryTextColor}}/>
      </div>
    </div>    
  )
}

export default MoreInfoSectionHeader;