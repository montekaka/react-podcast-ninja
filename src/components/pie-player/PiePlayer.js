import React from 'react';
import {Provider} from "jotai"
import {Container, PlayerContainer, EpisodeList, SectionHeader} from './components'
import './style/card-theme.css';


export default function PiePlayer(props) {
  const {sectionTitle, loading, people, episodes, artwork, title, href, theme } = props;    

  return (
    <Provider>
      <PlayerContainer theme={theme}/>
      <Container>
        <>
          <SectionHeader title={sectionTitle} textColor={theme.textColor}/>
          <EpisodeList episodes={episodes} artwork={artwork} podcastTitle={title}/>
        </>
      </Container>
    </Provider>
  );
}
