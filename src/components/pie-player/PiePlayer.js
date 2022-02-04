import React from 'react';
import {Provider} from "jotai"
import {Container, PlayerContainer, EpisodeList} from './components'
import './style/card-theme.css';


export default function PiePlayer(props) {
  const {loading, people, episodes, artwork, title, href, theme } = props;    

  return (
    <Provider>
      <PlayerContainer theme={theme}/>
      <Container>
        <EpisodeList episodes={episodes} artwork={artwork} podcastTitle={title}/>
      </Container>
    </Provider>
  );
}
