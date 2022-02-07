import React from 'react';
import {format} from 'date-fns'
import {useAtom} from "jotai"
import {upatePlayerAtom, themeAtom} from '../jotai'
import PlayPauseButton from './PlayPauseButton'
import CurrentPlayingSec from './CurrentPlayingSec'
import PlayingDurationSec from './PlayingDurationSec'

export default function EpisodeListCard(props) {
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
  const [themeState] = useAtom(themeAtom);

  const {muted, playing, playingId} = playerState;
  const {cardBackgroundColor, cardTextColor, themeClassName} = themeState;
  
  const onClick = () => {
    if(playing === true && playingId === idx) {
      // pause
      const payload = {playing: false};
      setPlayerState(payload);
    } else {
      // play
      if(playingId === idx) {
        // resume
        const payload = {url, playingId: idx, playing: true};
        setPlayerState(payload);        
      } else {
        // start playing another episode
        const payload = {url, playingId: idx, playing: true, playedSeconds: 0};
        setPlayerState(payload);        
      }

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

  if(themeClassName === 'jc-npp-thumnail') {
    return (
      <div className='jc-npp-thumnail-episode-wrapper' style={{backgroundColor: cardBackgroundColor, color: cardTextColor}}>
        <a className="meta-artwork" href={link} target="_blank">
          <div className='background-filter'></div>
          <img className='background-img' src={href ? href : podcastArtwork} alt={title}/>
        </a>
        <div className='main-meta' style={{color: cardTextColor}}>
          <div className='title'>{title}</div>
          <CurrentPlayingSec idx={idx} duration={duration}/>         
        </div>
        <div className='controls'>
          <PlayPauseButton idx={idx} onClick={onClick}/> 
        </div>
      </div>
    );
  } else if (themeClassName === 'jc-npp-tile' || (themeClassName === 'jc-npp-mix' && idx > 0)) {
    return (
      <div className='jc-npp-tile-episode-wrapper'>
        <img className='background-img' src={href ? href : podcastArtwork} alt={title}/> 
        <div className='main-container'>
          <div className='tags'>
            <div className='tag'>{pubDate ? format(new Date(pubDate), 'MM/dd/yyyy') : ""}</div>
          </div>
          <div className='jc-card-body'>
            <div className='controls'>              
              <PlayPauseButton idx={idx} onClick={onClick}/>             
            </div>
            <div className='title'>{title}</div>
            <div className='progress-duration-container'>              
              <div className='label'><PlayingDurationSec idx={idx} duration={duration}/></div>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (themeClassName === 'jc-npp-card' || (themeClassName === 'jc-npp-mix' && idx === 0)) {
    return (
      <div className='jc-npp-card-episode-wrapper' style={{backgroundColor: cardBackgroundColor}}>
        <img className='background-img' src={href ? href : podcastArtwork} alt={title}/>
        <div className='main-container'>
          <div className='tags' style={{backgroundColor: cardBackgroundColor, color: cardTextColor}}>{pubDate ? format(new Date(pubDate), 'MM/dd/yyyy') : ""}</div>
          <div className='jc-card-body'>
            <div className='meta'>
              <div className='main'>
                <div className='title'>{title}</div>
                <CurrentPlayingSec idx={idx} duration={duration}/>
              </div>            
              <PlayPauseButton idx={idx} onClick={onClick}/>
            </div>  
            <div className='break-line'/>
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

  return null;
}
