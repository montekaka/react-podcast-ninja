import React from 'react';
import {RotateCcw, RotateCw} from 'react-feather'
import {useAtom} from 'jotai'
import {
  configsAtom,
  playerAtom,
  metasAtom,
  togglePlayPauseAtom,
  updatePlayedTimeAtom
} from './jotai'
import PlayPauseButton from './PlayPauseButton'
import Artwork from './Artwork'
import ForwardBackwardButton from './ForwardBackwardButton'
import Metas from './Metas'
import ProgressControl from './ProgressControl'
import ProgressControlSlider from './ProgressControlSlider'

const PlayerContainer = () => {

  const [,updatePlayedTime] = useAtom(updatePlayedTimeAtom);
  const [metaState] = useAtom(metasAtom);
  const {title, subtitle} = metaState;
  const [playerSkin] = useAtom(configsAtom)
  const [playerState] = useAtom(playerAtom)
  const {playedSeconds, onReady} = playerState;

  return (
    <div className="bh-player-container">
      <div className="bh-player-controllers">
        <ForwardBackwardButton id="backward"
          label="5" 
          onClick={() => {
            if(onReady) {
              updatePlayedTime(playedSeconds-5)
            }            
          }}          
        >
          <RotateCcw className={`bh-button-icon`}
            style={{
              color: playerSkin.primaryButtonColor
            }}
          />                    
        </ForwardBackwardButton>
        <ForwardBackwardButton id="forward"
          label="10" 
          onClick={() => {
            if(onReady) {
              updatePlayedTime(playedSeconds+10)
            }            
          }}         
        >
          <RotateCw className={`bh-button-icon`}
            style={{
              color: playerSkin.primaryButtonColor
            }}
          />  
        </ForwardBackwardButton>
        <Artwork src={metaState.src}>
          <PlayPauseButton/>
        </Artwork>
      </div>
      <Metas>
        {title && <div className="bh-title">{title}</div>}
        {subtitle && <div className="bh-subtitle">{subtitle}</div>}
      </Metas> 
      <ProgressControl>
        <ProgressControlSlider/>     
      </ProgressControl>
    </div>
  )
}

export default PlayerContainer