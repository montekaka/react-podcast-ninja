import React from 'react';
import {useAtom} from "jotai"
import {upatePlayerAtom} from '../jotai'

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
  const {muted} = playerState;
  
  const onClick = () => {
    // const payload = {url, playingId: idx, playing: true};
    // setPlayerState(payload);    
    // // What is going on here?
    // // because safari only allow autoplay with muted.
    // // so that we will tell the player to muted first, then unmuted it after 500 ms
    // // https://github.com/CookPete/react-player/issues/338#issuecomment-382022759
    // if(muted === true) {
    //   setTimeout(() => {
    //     setPlayerState({muted: false})
    //   }, 500)
    // }
  }

  return (
    <div onClick={onClick} className='episode-wrapper' style={{backgroundColor: "#123123"}}>
      <img className='background-img' src={href ? href : podcastArtwork} alt={title}/>
      <div className='main-container'>
        <div className='tags' style={{backgroundColor: "#123123", color: "#fff"}}>{pubDate}</div>
        <div className='controller'>
          <div className='meta'>
            <div className='title'>{title}</div>
            <div className='publish-date'>{title}</div>
            <div className='progress-time'>{title}</div>
          </div>
          <div className='play-pause-button'>

          </div>
        </div>
      </div>
    </div>
  );
}
