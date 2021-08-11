import React, {useEffect} from 'react';
import {useAtom} from 'jotai'
// import PropTypes from 'prop-types';
import {
  episodesAtom,
  playerSkinAtom,
  playingIdAtom,
  tabAtom
} from './jotai'
import PlayerContainer from './PlayerContainer'
import PlayerHolder from './PlayerHolder'
import EpisodeList from './EpisodeList';
import MoreInfoSection from './MoreInfoSection';
import './ninja-player.css';

const NinjaPlayer = ({
  playerId, podcast, episodes, configs, ...props
}) => {

  // set jotai state
  const [, setEpisodes] = useAtom(episodesAtom);
  const [, setPlayerSkin] = useAtom(playerSkinAtom)
  const [, setPlayingId] = useAtom(playingIdAtom)
  const [tabState]  = useAtom(tabAtom);
  
  useEffect(() => {
    setPlayingId(0);
  }, [playerId])

  useEffect(() => {

  }, [podcast])

  useEffect(() => {
    if(episodes && episodes.length > 0) {
      setEpisodes(episodes);      
    }    
  }, [playerId, episodes])
  
  useEffect(() => {
    if(configs && Object.keys(configs).length > 0) {
      setPlayerSkin(configs); // TODO: use mapping to get the right fileds
    }
  }, [playerId, configs])  

  return (
    <div className="jc-player-wrapper">
      {
        tabState === 'main' ? <PlayerContainer/> : <MoreInfoSection/>
      }      
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

