import React from 'react';
import {Provider} from 'jotai'
import {storiesOf} from '@storybook/react'
import {NinjaPlayer} from '../components/ninja-player'

const stories = storiesOf('App Test', module);
const episodes = [{"title":"2021.07.25_RandGad_ep569","podcastTitle":"Wendy","artworkUrl":"https://justcast.sfo2.digitaloceanspaces.com/js-development/1627845371527-10-10_1ejhjo5.jpeg","pubDate":"2021-07-26T06:03:19.110Z","link":"http://localhost:3030/s/1000183","audioUrl":"http://138.197.193.80/s/cz7nmyrddd9xqn2/2021.07.25_randgad_ep569.mp3?dl=0","chaptersUrl":"https://justcast.sfo2.digitaloceanspaces.com/js-development/chapters/40132_1000183_chapters.json"},{"title":"Wendy-19","podcastTitle":"Wendy","artworkUrl":"https://justcast.sfo2.digitaloceanspaces.com/js-development/1627845329426-roycordings_i947av.jpeg","pubDate":"2021-06-17T21:34:13.256Z","link":"http://localhost:3030/s/1000181","audioUrl":"http://138.197.193.80/s/9ne3xp6xya1llox/Wendy-19.mp3?dl=0","chaptersUrl":null}]
const configs = {
  hidePubDate: false,
  primaryBackgroundColor: "#0c1824",
  primaryButtonColor: "#f7f8f9",
  // primaryButtonColor: "black",
  primaryTextColor: "#f7f8f9",
  progressBarFilledColor: "#f7f8f9",
  progressBarBackgroundColor: "#8A8175",
  // progressBarThumbColor: "#02030A",
  playlistBackgroundColor: "#30343c",
  playlistTextColor: "#f7f8f9",
  chapterBackgroundColor: "#30343c",
  chapterTextColor:  "#f7f8f9"  
}

const podcast = {
  menuItems: [{id:'subscribe', label: 'SUBSCRIBE'}, {id: 'social', label: "SOCIAL"}],
  'subscribe': [{id: 'rss', label: "RSS" , url: 'https://feed.justcast.com/shows/inside-the-aluminum-tube-with-shanon-baker/audioposts.rss'}],
  'social': [
    {id: 'twitter', url: 'https://twitter.com/thejustcast'}
  ]
}

stories.add('App', () => {
  return (
    <Provider>
      <NinjaPlayer
        podcast={podcast} 
        playerId="example"
        episodes={episodes}
        configs={configs}
        singleEpisode={false}
      />
    </Provider>
  );
})