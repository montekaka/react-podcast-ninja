import React from 'react';
import NinjaPlayer from './NinjaPlayer'

const NinjaPodcastPlayer = ({
  rssFeedUrl, playerId, configs, proxy, singleEpisode
}) => {

  return (  
    <NinjaPlayer
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
