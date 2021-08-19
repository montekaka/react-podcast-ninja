import React, {Suspense} from 'react';
import {Provider} from 'jotai'
import PlaylistPlayer from './PlaylistPlayer';
import './retro-player.css';

const RetroPlayer = ({
  playerId, podcast, episodes, configs, singleEpisode, rssFeedUrl, proxy
}) => {
  return (    
    <Suspense fallback={<></>}>
      <Provider>
        <PlaylistPlayer 
          playerId={playerId} 
          podcast={podcast} 
          episodes={episodes}
          rssFeedUrl={rssFeedUrl} 
          proxy={proxy}
          configs={configs}
          singleEpisode={singleEpisode}
        />
        {/* <WaveSvg/> */}
      </Provider>  
    </Suspense>
  )
}

export default RetroPlayer;

