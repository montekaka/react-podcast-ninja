import React from 'react';
import {useAtom} from "jotai"
import {XCircle} from 'react-feather'
import {tabAtom, playerSkinAtom} from './jotai'

const MoreInfoSectionHeader = (props) => {
  const [, setTabName] = useAtom(tabAtom);
  const [playerSkin] = useAtom(playerSkinAtom);

  return (
    <div className="jc-more-info-header">
      <div className="jc-more-info-header-meta">
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