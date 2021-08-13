import React, {useEffect} from 'react';
import {useAtom} from 'jotai'
// import PropTypes from 'prop-types';
import {
  episodesAtom,
  playerSkinAtom,
  playingIdAtom,
  tabAtom,
  fetchChaptersAtom
} from './jotai'
import PlayerContainer from './PlayerContainer'
import PlayerHolder from './PlayerHolder'
import EpisodeList from './EpisodeList';
import MoreInfoSection from './MoreInfoSection';

const PlaylistPlayer = ({
  playerId, podcast, episodes, configs, singleEpisode, ...props
}) => {

  // set jotai state
  const [episodesState, setEpisodes] = useAtom(episodesAtom);
  const [, setPlayerSkin] = useAtom(playerSkinAtom)
  const [playingId, setPlayingId] = useAtom(playingIdAtom)
  const [tabState]  = useAtom(tabAtom);
  const [, fetchChapters] = useAtom(fetchChaptersAtom)
  
  useEffect(() => {
    if(playerId) {
      setPlayingId(0);      
    }
  }, [playerId])

  useEffect(() => {
    if(playingId >= 0) {
      fetchChapters()
    }
  }, [playingId, episodesState])

  // useEffect(() => {

  // }, [podcast])

  useEffect(() => {
    if(episodes && episodes.length > 0) {
      setEpisodes(episodes);      
    }    
  }, [episodes])
  
  useEffect(() => {
    if(configs && Object.keys(configs).length > 0) {
      setPlayerSkin(configs); // TODO: use mapping to get the right fileds
    }
  }, [configs])  

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

