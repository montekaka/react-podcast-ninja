import React, {useState} from 'react';
import {Provider} from 'jotai'
import {storiesOf} from '@storybook/react'
import {NinjaPodcastPlayer} from '../components/ninja-player'

const stories = storiesOf('Podcast Player Test', module);
const rssFeedUrl = 'https://feed.justcast.com/shows/jia-chen-chinaarchive/audioposts.rss'
const links = [rssFeedUrl, 'https://feed.justcast.com/shows/readcast/audioposts.rss']

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
  const [link, setLink] = useState(0);
  const [primaryBackgroundColor, setColor] = useState("#0c1824")

  return (
    <Provider>
      <div onClick={() => {
        setLink((link+1) % 2)
      }}>click</div>
      <input value={primaryBackgroundColor} onChange={(e) => {
        setColor(e.target.value)
      }}/>
      <NinjaPodcastPlayer 
        playerId="podcast-example"
        rssFeedUrl={links[link]}
        configs={{...configs, primaryBackgroundColor}}
        singleEpisode={false}
        proxy={''}
      />
    </Provider>
  );
})