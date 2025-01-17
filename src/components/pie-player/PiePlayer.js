import React, {useRef} from 'react';
import {Provider} from "jotai"
import {Container, PlayerContainer, EpisodeList, SectionHeader, PodcastPeople} from './components'
import './main.css';
import './people-theme.css';
import './item-card.css';
import './item-thumbnail.css';
import './item-tile.css';

export default function PiePlayer(props) {
  const {sectionTitle, loading, people, episodes, artwork, title, href, theme, peopleTitle } = props;    
  const scrollPerClick = 240; 
  const episodesRef = useRef(null);

  const sliderToRight = () => {    
    episodesRef.current.scrollTo({
      top: 0,
      left: episodesRef.current.scrollLeft + scrollPerClick,
      behavior: 'smooth'
    })
  }

  const sliderToLeft = () => {
    episodesRef.current.scrollTo({
      top: 0,
      left: episodesRef.current.scrollLeft - scrollPerClick,
      behavior: 'smooth'
    })
  }   


  if(theme) {
    return (
      <Provider>
        <PlayerContainer theme={theme}/>
        <Container>
          <SectionHeader title={sectionTitle} navControler={theme.navControler} sliderToRight={sliderToRight} sliderToLeft={sliderToLeft}/>
          <EpisodeList episodes={episodes} artwork={artwork} podcastTitle={title} episodesRef={episodesRef}>
            <SectionHeader title={"More episodes"} navControler={true} sliderToRight={sliderToRight} sliderToLeft={sliderToLeft}/>
          </EpisodeList>
          <PodcastPeople people={people} artwork={artwork} textColor={theme.textColor} peopleTitle={peopleTitle}/>
        </Container>
      </Provider>
    );
  }

  return null;
}
