import React from 'react';
import {Provider} from "jotai"
import {Container, PlayerContainer, EpisodeList, SectionHeader, PodcastPeople} from './components'
import './style/card-theme.css';
import './style/people-theme.css';

export default function PiePlayer(props) {
  const {sectionTitle, loading, people, episodes, artwork, title, href, theme, peopleTitle } = props;    

  if(theme) {
    return (
      <Provider>
        <PlayerContainer theme={theme}/>
        <Container>
          <>
            <SectionHeader title={sectionTitle} textColor={theme.textColor}/>
            <EpisodeList episodes={episodes} artwork={artwork} podcastTitle={title}/>
            <PodcastPeople people={people} artwork={artwork} textColor={theme.textColor} peopleTitle={peopleTitle}/>
          </>
        </Container>
      </Provider>
    );
  }

  return null;
}
