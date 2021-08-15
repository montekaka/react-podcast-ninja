import React, {useEffect} from 'react';
import NinjaPlayer from './NinjaPlayer'
import LoadingScreenContainer from './LoadingScreenContainer'
import {useFetchRss} from './hooks'
import LoadingBouncing from './LoadingBouncing'
import { useAtom } from 'jotai';
import {chaptersAtom} from './jotai'

const NinjaPodcastPlayer = ({
  rssFeedUrl, playerId, configs, proxy,singleEpisode
}) => {

  // const [episodes, setEpisodes] = useState([]);
  const [episodes, loading, errorMessage] = useFetchRss(rssFeedUrl, proxy)
  const [, setChapters] = useAtom(chaptersAtom)

  useEffect(() =>{ 
    setChapters([]);
  }, [rssFeedUrl])

  if(loading) {
    return (
      <LoadingScreenContainer>        
        <LoadingBouncing/>
        <h2>Loading....</h2>
      </LoadingScreenContainer>
    )
  }

  if(errorMessage && errorMessage.length > 0) {
    return (
      <LoadingScreenContainer>
        <h3>{errorMessage}</h3>
      </LoadingScreenContainer>
    )
  }

  return (
    
    <NinjaPlayer
      playerId={playerId}
      episodes={episodes}
      configs={configs}
      singleEpisode={singleEpisode}    
    />
  
  )
}

export default NinjaPodcastPlayer;
