import React from 'react';
import {storiesOf} from '@storybook/react'
import {Discast} from '../components/discast'

const stories = storiesOf('Discast Test', module);
// const episodes = [{"title":"2021.07.25_RandGad_ep569","podcastTitle":"Wendy","artworkUrl":"https://justcast.sfo2.digitaloceanspaces.com/js-development/1627845371527-10-10_1ejhjo5.jpeg","pubDate":"2021-07-26T06:03:19.110Z","link":"http://localhost:3030/s/1000183","audioUrl":"http://138.197.193.80/s/cz7nmyrddd9xqn2/2021.07.25_randgad_ep569.mp3?dl=0","chaptersUrl":"https://justcast.sfo2.digitaloceanspaces.com/js-development/chapters/40132_1000183_chapters.json"},{"title":"Wendy-19","podcastTitle":"Wendy","artworkUrl":"https://justcast.sfo2.digitaloceanspaces.com/js-development/1627845329426-roycordings_i947av.jpeg","pubDate":"2021-06-17T21:34:13.256Z","link":"http://localhost:3030/s/1000181","audioUrl":"http://138.197.193.80/s/9ne3xp6xya1llox/Wendy-19.mp3?dl=0","chaptersUrl":null}]
const configs = {
  hidePubDate: false,
  primaryBackgroundColor: "#0c1824",
  primaryButtonColor: "#f7f8f9",
  primaryTextColor: "#f7f8f9",
  progressBarFilledColor: "#f7f8f9",
  progressBarBackgroundColor: "#8A8175",
  playlistBackgroundColor: "#30343c",
  playlistTextColor: "#f7f8f9",
  chapterBackgroundColor: "#30343c",
  chapterTextColor:  "#f7f8f9"  
}

const comments = [
  {  startSecond: 120, endSecond: 180, startTime: "00:02:00", endTime: "00:03:00", message: "How can I remove these notifications on my pages? It has something to do with the wildcard subdomain", author: ""},
  {  startSecond: 120, endSecond: 180, startTime: "00:02:00", endTime: "00:03:00", message: "How can I remove these notifications on my pages? It has something to do with the wildcard subdomain", author: ""},
  {  startSecond: 120, endSecond: 180, startTime: "00:02:00", endTime: "00:03:00", message: "How can I remove these notifications on my pages? It has something to do with the wildcard subdomain", author: ""},
  {  startSecond: 120, endSecond: 180, startTime: "00:02:00", endTime: "00:03:00", message: "How can I remove these notifications on my pages? It has something to do with the wildcard subdomain", author: ""},
  {  startSecond: 120, endSecond: 180, startTime: "00:02:00", endTime: "00:03:00", message: "How can I remove these notifications on my pages? It has something to do with the wildcard subdomain", author: ""},
  {  startSecond: 120, endSecond: 180, startTime: "00:02:00", endTime: "00:03:00", message: "How can I remove these notifications on my pages? It has something to do with the wildcard subdomain", author: ""}
]

stories.add('App', () => {
  return (
    <Discast
      artworkUrl="https://content.production.cdn.art19.com/images/e9/95/72/33/e9957233-ba82-4fe4-8a56-efbd175ae7f5/0ff3126d11502fa0291bc5c44fd0ae9528c8cc0a4098a571f4fe83d8fd29305b65f35d670c52518e2258d8133a961450b23fbc00527c54156dc3bec1918b63dc.jpeg"
      title="Apple: The Internet Explorer of podcast apps? Evo Terra on why podcast apps suck. How's Spotify doing and multiple new ways to discover podcasts."
      enclosureUrl="https://rss.art19.com/episodes/906658fc-d3cc-4ebb-a0ec-4d1f561e3a13.mp3?rss_browser=BAhJIgtDaHJvbWUGOgZFVA%3D%3D--d05363d83ce333c74f32188013892b2863ad051c"
      configs={configs}
      comments={comments}
    />
  );
})