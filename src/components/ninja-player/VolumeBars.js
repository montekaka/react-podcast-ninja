import React from "react";
import { playerSkinAtom} from './jotai'

const VolumeBars = ({volume, volumBinClicked}) => {
  const [playerSkin] = useAtom(playerSkinAtom);
  
  const volums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div style={{
      display: 'flex',
      padding: "4px",
      height: "18px",
      alignContent: 'center',            
    }}>
      {
        volums.map((vol, index) => <span key={`vol-${index+1}`} style={{
          height: "10px",          
          width: "4px",
          marginLeft: "2px",
          marginRight: "2px",      
          cursor: 'pointer',    
          opacity: index < ( volume >= 0 ? (volume * 10) : 0)  ? "0.8" : "0.4",
          backgroundColor: playerSkin.primaryButtonColor
        }}
        onClick={() => {
          volumBinClicked(index)
        }}
      />)
      }
    </div>
  )
}

export default VolumeBars;