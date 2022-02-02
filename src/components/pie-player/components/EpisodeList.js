import React from 'react';
import {useAtom} from "jotai"
import {themeAtom} from '../jotai'
import EpisodeListItem from './EpisodeListItem'

export default function EpisodeList({episodes}) {
  const [themeState] = useAtom(themeAtom);

  if(episodes && episodes.length > 0) {
    
    return (
      <div className=''>
        { episodes.map((e, idx) => <EpisodeListItem key={`castpie-${idx+1}`} title={e.title} idx={idx} url={e.url}/>)}         
      </div>
    )      
    
  }  

  return null;
}
