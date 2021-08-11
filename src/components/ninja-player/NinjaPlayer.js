import React, {useEffect} from 'react';
import {useAtom} from 'jotai'
// import PropTypes from 'prop-types';
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
  playerId, podcast, episodes, configs
}) => {

  // set jotai state
  const [, setEpisodes] = useAtom(episodesAtom);
  const [, setPlayerSkin] = useAtom(playerSkinAtom)
  const [, setPlayingId] = useAtom(playingIdAtom)
  
  useEffect(() => {
    setPlayingId(0);
  }, [playerId])

  useEffect(() => {

  }, [podcast])

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
    <div className="jc-player-wrapper">
      <PlayerContainer/>
      <EpisodeList/>
      <PlayerHolder/>
    </div>
  )
}

// NinjaPlayer.propTypes = {
//   // podcast: PropTypes.object,
//   episodes: PropTypes.array,
//   // theme: propTypes.object
// }

// NinjaPlayer.defaultProps = {
//   // podcast: {},
//   episodes: [],
//   // theme: {}
// };


export default NinjaPlayer;

