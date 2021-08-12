import React, {Suspense} from 'react';
import {Provider} from 'jotai'
import PlaylistPlayer from './PlaylistPlayer';
import './ninja-player.css';

const NinjaPlayer = ({
  playerId, podcast, episodes, configs, ...props
}) => {
  return (    
    <Suspense fallback={<></>}>
      <Provider>      
        <PlaylistPlayer playerId={playerId} podcast={podcast} episodes={episodes} configs={configs}/>
      </Provider>  
    </Suspense>
  )
}

export default NinjaPlayer;

