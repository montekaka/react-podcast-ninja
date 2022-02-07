import React from 'react';
import EpisodeListCard from './EpisodeListCard'
import {useAtom} from "jotai"
import {themeAtom} from '../jotai'

export default function EpisodeList(props) {
  const {episodes, artwork, podcastTitle, episodesRef} = props;
  const [themeState] = useAtom(themeAtom);
  const {themeClassName} = themeState;

  if(episodes && episodes.length > 0) {
    const cardEpisode = episodes[0];
    const tileEpisodes = episodes.filter((_, idx) => idx > 0);

    if( themeClassName === 'jc-npp-mix') {
      return (
        <div className='jc-npp-mix'>
          <EpisodeListCard 
            key={`castpie-${1}`} 
            title={cardEpisode.title} 
            podcastTitle={podcastTitle}
            podcastArtwork={artwork}
            idx={0} 
            link={cardEpisode.link} 
            href={cardEpisode.href}
            url={cardEpisode.url}
            pubDate={cardEpisode.pubDate}
            duration={cardEpisode.duration}
          />
          {
            tileEpisodes.length > 1 && props.children
          }
          <div className='jc-npp-tile' ref={episodesRef}>
            { tileEpisodes.map((e, idx) => <EpisodeListCard 
              key={`castpie-${idx+2}`} 
              title={e.title} 
              podcastTitle={podcastTitle}
              podcastArtwork={artwork}
              idx={idx+1} 
              link={e.link} 
              href={e.href}
              url={e.url}
              pubDate={e.pubDate}
              duration={e.duration}
            />)}
          </div>
        </div>
      )
    } else {
      return (
        <div className={themeClassName} ref={episodesRef}>
          { episodes.map((e, idx) => <EpisodeListCard 
            key={`castpie-${idx+1}`} 
            title={e.title} 
            podcastTitle={podcastTitle}
            podcastArtwork={artwork}
            idx={idx} 
            link={e.link} 
            href={e.href}
            url={e.url}
            pubDate={e.pubDate}
            duration={e.duration}
          />)}
        </div>
      )  
    }
  }  

  return null;
}
