import React from 'react';
import NinjaPlayer from './NinjaPlayer'

const NinjaPodcastPlayer = ({
  rssFeedUrl, playerId, configs, proxy, singleEpisode, themeName
}) => {

  return (  
    <NinjaPlayer
      themeName={themeName}
      playerId={playerId}
      episodes={[]}
      configs={configs}
      singleEpisode={singleEpisode}  
      rssFeedUrl={rssFeedUrl}
      proxy={proxy}
    />   
  )
}

export default NinjaPodcastPlayer;
