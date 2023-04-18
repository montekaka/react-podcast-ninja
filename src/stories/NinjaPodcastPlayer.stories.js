import React, {useState} from 'react';
import {Provider} from 'jotai'
import {storiesOf} from '@storybook/react'
import {NinjaPodcastPlayer} from '../components/ninja-player'

const stories = storiesOf('Podcast Player Test', module);
const rssFeedUrl = 'http://localhost:3000/shows/f84ff332ddd5708d0e524afe6cb0b377aa4e3c3d/private_feeds/2f582017ce4c26b9fd7c8cf8595bf61a3c580ab7.xml'
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
      {/* <input value={primaryBackgroundColor} onChange={(e) => {
        setColor(e.target.value)
      }}/> */}
      <NinjaPodcastPlayer
        playerId="podcast-example"
        rssFeedUrl={rssFeedUrl}
        configs={{...configs, primaryBackgroundColor}}
        singleEpisode={false}
        proxy={''}
      />
    </Provider>
  );
})