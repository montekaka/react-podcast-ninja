import React from 'react';
import {format} from 'date-fns'
import {useAtom} from "jotai"
import {upatePlayerAtom} from '../jotai'
import PlayPauseButton from './PlayPauseButton'
import CurrentPlayingSec from './CurrentPlayingSec'

export default function EpisodeListItem(props) {
  const {
    podcastTitle, 
    podcastArtwork, 
    title, 
    idx, 
    url,
    link,
    href,
    pubDate,
    duration
  } = props;
  const [playerState, setPlayerState] = useAtom(upatePlayerAtom);
  const {muted, playing} = playerState;
  
  const onClick = () => {
    if(playing === true) {
      // pause
      const payload = {url: null, playingId: null, playing: false, onReady: false};
      setPlayerState(payload);
    } else {
      // play
      const payload = {url, playingId: idx, playing: true};
      setPlayerState(payload);
      // What is going on here?
      // because safari only allow autoplay with muted.
      // so that we will tell the player to muted first, then unmuted it after 500 ms
      // https://github.com/CookPete/react-player/issues/338#issuecomment-382022759
      if(muted === true) {
        setTimeout(() => {
          setPlayerState({muted: false})
        }, 500)
      }      
    }

  }

  return (
    <div className='episode-wrapper' style={{backgroundColor: "#123123"}}>
      <img className='background-img' src={href ? href : podcastArtwork} alt={title}/>
      <div className='main-container'>
        <div className='tags' style={{backgroundColor: "#123123", color: "#fff"}}>{pubDate ? format(new Date(pubDate), 'MM/dd/yyyy') : ""}</div>
        <div className='jc-card-body'>
          <div className='meta'>
            <div className='main'>
              <div className='title'>{title}</div>
              <div className='progress-time'>
                <CurrentPlayingSec idx={idx}/>
                <div>/</div>
                <div>{duration}</div>
              </div>
            </div>            
            <div className='jc-player-pp-button-container' onClick={onClick}>
              <PlayPauseButton idx={idx}/>
            </div>            
          </div>          
          <div className='footer'>
            <div className='footer-meta'>
              <div className='artwork-wrapper'>
                <div className='cover'/>
                <img src={podcastArtwork} />
              </div>  
              <div className='title'>{podcastTitle}</div>
            </div>
            <a className='footer-button' href={link} target="_blank">OPEN</a>
          </div>
        </div>
      </div>
    </div>
  );
}
