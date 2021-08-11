import React from "react";
import { useAtom } from "jotai";
import {Volume1, Volume2, VolumeX} from 'react-feather'
import { playerSkinAtom} from './jotai'
import VolumeBars from './VolumeBars'

const VolumeControls = () => {
  const [playerSkin] = useAtom(playerSkinAtom);
  
  const handleVolumeChange = (x) => {
    console.log('hi')
  }

  return (
    <div className="volume-controls">      
      <div onClick={handleVolumeChange} style={{
        cursor: 'pointer',
        display: 'flex',
        height: "24px",
        alignContent: 'center',        
      }}><Volume1 style={{color: playerSkin.primaryTextColor}}/></div>
      <VolumeBars volume={3} volumBinClicked={handleVolumeChange}/>
      <div onClick={handleVolumeChange} style={{
        cursor: 'pointer',
        display: 'flex',
        height: "24px",
        alignContent: 'center',        
      }}><Volume2 style={{color: playerSkin.primaryTextColor}}/></div>
      {/* <span className={`volume-control fe fe-volume-${volume > 0 ? "1" : "x"}`} onClick={handleVolumeChange}/>
      <VolumeBars volume={volume} volumBinClicked={handleVolumeChange}/>
      <span className="volume-control fe fe-volume-2" onClick={handleVolumeChange}/> */}
    </div>    
  )
}

export default VolumeControls;