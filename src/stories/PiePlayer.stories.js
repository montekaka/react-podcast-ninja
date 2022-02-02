import React from 'react';
import {storiesOf} from '@storybook/react'
import {PiePlayer} from '../components/pie-player'

const stories = storiesOf('PiePlayer Test', module);

const episodes = [
  {title: "Euphoria & Cheer", link: "https://justcast.com/shows/41653/audioposts/1226135", pubDate: "Thu, 20 Jan 2022 21:00:00 +0000", url: "https://dl.dropboxusercontent.com/s/f1k42jscnvw6nfc/euphoria%20%26%20cheer.mp3?dl=0", href: "https://justcast.sfo2.digitaloceanspaces.com/js-production/1608177141364-NoSpoilers_Podcast(clean).jpg"},
  {title: "NO SPOILERS EP3", link: "https://justcast.com/shows/41653/audioposts/1219535", url: "https://dl.dropboxusercontent.com/s/a2q8flb9qoawu1f/no%20spoilers%20ep3.mp3?dl=0", pubDate: "Mon, 03 Jan 2022 08:00:00 +0000", href: "https://justcast.sfo2.digitaloceanspaces.com/js-production/1620108639712-NoSpoilers_Podcast(clean).jpg"}
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