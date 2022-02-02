import React from 'react';
import {useAtom} from "jotai"
import {themeAtom} from '../jotai'
import EpisodeListItem from './EpisodeListItem'

export default function EpisodeList({episodes}) {
  const [themeState] = useAtom(themeAtom);
  
  if(episodes && episodes.length > 0) {
    
    return (
      <div>
      <div>{themeState.backgroundColor}</div>
      <div className='rnp-pie-player-container'>
        { episodes.map((e, idx) => <EpisodeListItem key={`castpie-${idx+1}`} title={e.title} idx={idx} url={e.url}/>)}         
      </div>
      </div>
    )      
    
  }  

  return null;
}
