import React, {Suspense} from 'react';
import {Provider} from 'jotai'
import PlaylistPlayer from './PlaylistPlayer';
import './ninja-player.css';
import './retro-player.css';
import WaveSvg from './WaveSvg';

const NinjaPlayer = ({
  playerId, themeName, podcast, episodes, configs, singleEpisode, rssFeedUrl, proxy
}) => {

  return (    
    <Suspense fallback={<></>}>
      <Provider>
        <PlaylistPlayer 
          themeName={themeName}
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

export default NinjaPlayer;

