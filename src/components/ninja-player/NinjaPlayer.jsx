import React, {useEffect} from 'react';
import {useAtom} from 'jotai'
import PropTypes from 'prop-types';
import {
  episodesAtom,
  playerSkinAtom,
  playingIdAtom
} from './jotai'
import PlayerContainer from './PlayerContainer'
import PlayerHolder from './PlayerHolder'
import EpisodeList from './EpisodeList';
import './ninja-player.css';

const NinjaPlayer = ({
  podcast, episodes, theme
}) => {

  // set jotai state
  const [episodesState, setEpisodes] = useAtom(episodesAtom);
  const [, setPlayerSkin] = useAtom(playerSkinAtom)
  const [, setPlayingId] = useAtom(playingIdAtom)

  useEffect(() => {

  }, [podcast])

  useEffect(() => {
    if(episodes && episodes.length > 0) {
      setEpisodes(episodes);
      setPlayingId(0);
    }    
  }, [episodes])
  
  useEffect(() => {
    if(theme && Object.keys(theme).length > 0) {
      setPlayerSkin(theme); // TODO: use mapping to get the right fileds
    }
  }, [theme])  

  return (
    <div className="jc-player-wrapper">
      <PlayerContainer/>
      <EpisodeList/>
      <PlayerHolder/>
    </div>
  )
}

NinjaPlayer.propTypes = {
  // podcast: PropTypes.object,
  episodes: PropTypes.array,
  // theme: propTypes.object
}

NinjaPlayer.defaultProps = {
  // podcast: {},
  episodes: [],
  // theme: {}
};


export default NinjaPlayer;

