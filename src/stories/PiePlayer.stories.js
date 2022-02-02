import React from 'react';
import {storiesOf} from '@storybook/react'
import {PiePlayer} from '../components/pie-player'

const stories = storiesOf('PiePlayer Test', module);

const episodes = [
  {title: "Euphoria & Cheer", link: "https://justcast.com/shows/41653/audioposts/1226135", pubDate: "Thu, 20 Jan 2022 21:00:00 +0000", url: "https://dl.dropboxusercontent.com/s/yl39eqesv1xsf6a/episode%20284%20-%20%E4%B8%AD%E5%A4%AE%E6%9A%B4%E5%8A%9B%E6%95%91%E5%B8%82.mp3?dl=0", href: "https://justcast.sfo2.digitaloceanspaces.com/js-production/1608177141364-NoSpoilers_Podcast(clean).jpg"},
  {title: "NO SPOILERS EP3", link: "https://justcast.com/shows/41653/audioposts/1219535", url: "https://dl.dropboxusercontent.com/s/rrtubjuy0uuqvyu/Episode%20298%20%EF%BC%8D%20%E6%B7%BA%E8%AB%87%E4%B8%80%E6%88%B0.mp3?dl=0", pubDate: "Mon, 03 Jan 2022 08:00:00 +0000", href: "https://justcast.sfo2.digitaloceanspaces.com/js-production/1620108639712-NoSpoilers_Podcast(clean).jpg"}
]
// episodes
// artwork
// podcast-title
// podcast-link
// people?
// on episode
// title
// img?
// link
// duration?
// publish-date
// chapters?
// render-type

stories.add('App', () => {
  return (
    <PiePlayer
      episodes={episodes}
    />
  );
})