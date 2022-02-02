import React from 'react';
import EpisodeListItem from './EpisodeListItem'

export default function EpisodeList({episodes}) {

  if(episodes && episodes.length > 0) {
    
    return (
      <div className='rnp-pie-player-container'>
        { episodes.map((e, idx) => <EpisodeListItem key={`castpie-${idx+1}`} title={e.title} idx={idx} url={e.url}/>)}         
      </div>
    )      
    
  }  

  return null;
}
