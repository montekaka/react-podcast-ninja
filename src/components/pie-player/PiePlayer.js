import React from 'react';
import {Provider} from "jotai"
import {PlayerContainer, EpisodeList} from './components'

export default function PiePlayer(props) {
  const {people, episodes, artwork, title, href, theme } = props;    

  return (
    <Provider>      
      <PlayerContainer theme={theme}/>
      <EpisodeList episodes={episodes}/>    
    </Provider>
  );
}
