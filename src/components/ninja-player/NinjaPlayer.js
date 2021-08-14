import React, {Suspense} from 'react';
import {Provider} from 'jotai'
import PlaylistPlayer from './PlaylistPlayer';
import './ninja-player.css';

const NinjaPlayer = ({
  playerId, podcast, episodes, configs, singleEpisode
}) => {
  return (    
    <Suspense fallback={<></>}>
      <Provider>
        <div style={{height: "100vh", width: "100%", margin: 0, padding: 0, boxSizing: 'border-box'}}>
          <PlaylistPlayer 
            playerId={playerId} 
            podcast={podcast} 
            episodes={episodes} 
            configs={configs}
            singleEpisode={singleEpisode}
          />
        </div>
      </Provider>  
    </Suspense>
  )
}

export default NinjaPlayer;

