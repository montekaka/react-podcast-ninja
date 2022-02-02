import React from 'react';
import {useAtom} from "jotai"
import {PlayerContainer, EpisodeList} from './components'

export default function PiePlayer(props) {
  const {people, episodes, artwork, title, href } = props;
  console.log('hello world');

  return (
    <div>
      <p>Hello world</p>
      <PlayerContainer/>
      <EpisodeList episodes={episodes}/>
    </div>
  );
}
