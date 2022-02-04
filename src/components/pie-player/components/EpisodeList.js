import React from 'react';
import EpisodeListItem from './EpisodeListItem'

export default function EpisodeList({episodes, artwork, podcastTitle}) {

  if(episodes && episodes.length > 0) {
    
    return (
      <div className='episodes'>
        { episodes.map((e, idx) => <EpisodeListItem 
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
