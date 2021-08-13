import React, {useState, useEffect} from 'react';
import NinjaPlayer from './NinjaPlayer'
import {useFetchRss} from './hooks'

const NinjaPodcastPlayer = ({
  rssFeedUrl, playerId, configs, ...props
}) => {

  // const [episodes, setEpisodes] = useState([]);
  const [episodes, loading, errorMessage] = useFetchRss(rssFeedUrl)

  return (
    <NinjaPlayer
      playerId={playerId}
      episodes={episodes}
      configs={configs}
      singleEpisode={false}    
    />
  )
}

export default NinjaPodcastPlayer;
