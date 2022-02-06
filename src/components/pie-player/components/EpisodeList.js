import React from 'react';
import EpisodeListCard from './EpisodeListCard'
import {useAtom} from "jotai"
import {themeAtom} from '../jotai'

export default function EpisodeList({episodes, artwork, podcastTitle}) {

  const [themeState] = useAtom(themeAtom);

  if(episodes && episodes.length > 0) {
    
    return (
      <div className={themeState.themeClassName}>
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

  return null;
}
