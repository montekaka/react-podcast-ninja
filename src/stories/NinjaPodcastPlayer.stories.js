import React from 'react';
import {Provider} from 'jotai'
import {storiesOf} from '@storybook/react'
import {NinjaPodcastPlayer} from '../components/ninja-player'

const stories = storiesOf('Podcast Player Test', module);
const rssFeedUrl = 'https://feed.justcast.com/shows/jia-chen-chinaconscience/audioposts.rss'
const configs = {
  hidePubDate: false,
  primaryBackgroundColor: "#0c1824",
  primaryButtonColor: "#f7f8f9",
  primaryTextColor: "#f7f8f9",
  progressBarFilledColor: "#f7f8f9",
  progressBarBackgroundColor: "#8A8175",
  // progressBarThumbColor: "#02030A",
  playlistBackgroundColor: "#30343c",
  playlistTextColor: "#f7f8f9",
  chapterBackgroundColor: "#30343c",
  chapterTextColor:  "#f7f8f9"  
}

stories.add('App', () => {
  return (
    <Provider>
      <NinjaPodcastPlayer 
        playerId="podcast-example"
        rssFeedUrl={rssFeedUrl}
        configs={configs}
        singleEpisode={true}
      />
    </Provider>
  );
})