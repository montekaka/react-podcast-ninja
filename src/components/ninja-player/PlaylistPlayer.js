import React, {useEffect} from 'react';
import {useAtom} from 'jotai'
// import PropTypes from 'prop-types';
import {
  playerSkinAtom,
  playingIdAtom,
  tabAtom,
  fetchChaptersAtom,
  fetchEpisodesAtom,
  errorMessageAtom,
  loadingAtom,  
} from './jotai'
import PlayerContainer from './PlayerContainer'
import PlayerHolder from './PlayerHolder'
import EpisodeList from './EpisodeList';
import MoreInfoSection from './MoreInfoSection';
import LoadingScreenContainer from './LoadingScreenContainer'
import LoadingBouncing from './LoadingBouncing'

const PlaylistPlayer = ({
  playerId, podcast, episodes, configs, singleEpisode, rssFeedUrl, proxy
}) => {

  // set jotai state
  const [episodesState, fetchEpisodes] = useAtom(fetchEpisodesAtom);
  const [, setPlayerSkin] = useAtom(playerSkinAtom)
  const [playingId, setPlayingId] = useAtom(playingIdAtom)
  const [tabState]  = useAtom(tabAtom);
  const [, fetchChapters] = useAtom(fetchChaptersAtom)
  const [errorMessage] = useAtom(errorMessageAtom)
  const [loading] = useAtom(loadingAtom)
  
  useEffect(() => {
    fetchEpisodes({
      rssFeedUrl,
      proxy, 
      episodes
    })
    setPlayingId(0);
  }, [rssFeedUrl, episodes])

  useEffect(() => {
    if(playingId >= 0) {
      fetchChapters()
    }
  }, [playingId, episodesState])
  
  useEffect(() => {
    if(configs && Object.keys(configs).length > 0) {
      setPlayerSkin(configs); // TODO: use mapping to get the right fileds
    }
  }, [configs])  


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
    <div className={singleEpisode ? 'jc-player-wrapper single-episode-player-wrapper' : 'jc-player-wrapper'}>
      {
        tabState === 'main' ? <PlayerContainer/> : <MoreInfoSection/>
      }      
      {singleEpisode ? null : <EpisodeList/> }
      <PlayerHolder/>
    </div>
  )
}

export default PlaylistPlayer;

