<h1 align='center'>
  React Podcast Ninja
</h1>

<p align='center'>
  A React component for playing podcast from RSS feed, supports chapters namespaces from <a href="https://podcastindex.org/">podcastindex.org</a>.
</p>

### Usage

```bash
npm i react-podcast-ninja # or yarn add react-podcast-ninja
```


```jsx
import React from 'react'
import {NinjaPlayer} from 'react-podcast-ninja'

// Render a podcast player with multiple episodes
  <NinjaPlayer
    configs={configs}
    playerId={`${showId}-playlist`}
    episodes={episodes}
  />
```

By default, NinjaPlayer comes with a playlist.  You can disable the playlist by setting `singleEpisode` props to true.

Demo page: [`https://cookpete.com/react-player`](https://cookpete.com/react-player)


### Props

Prop | Description | Default
---- | ----------- | -------
playerId | id for the player
episodes | Episodes to play. | `[] // empty array`
configs  | player colors | `{ hidePubDate: false, primaryBackgroundColor: "#0c1824", primaryButtonColor: "#f7f8f9", primaryTextColor: "#f7f8f9", progressBarFilledColor: "#f7f8f9",progressBarBackgroundColor: "#8A8175",playlistBackgroundColor: "#30343c",playlistTextColor: "#f7f8f9", chapterBackgroundColor: "#30343c",chapterTextColor:  "#f7f8f9"  }`
singleEpisode | Set to `true` or `false` to display the playlist panel | `false`

### Episode structure

Name | Type | Required
---- | ----------- | -------
title | String  | yes
podcastTitle | String  | yes
artworkUrl | String  | yes
pubDate | DateTime  | yes
link | String  | no
audioUrl | String  | yes
chaptersUrl | String  | no


## Podcast player (using RSS feed)

```jsx
import React from 'react'
import {NinjaPodcastPlayer} from 'react-podcast-ninja'

// Render a podcast player with multiple episodes
  <NinjaPodcastPlayer 
    playerId="podcast-example"
    rssFeedUrl={rssFeedUrl}
    configs={configs}
  />
```

Similar to the `<NinjaPlayer/>`, except it requires the RSS feed.

## Motivation and history
I've created this code because I want to help promote the PodcastIndex chapters namespaces.  After a quick search, I found most of podcast widget player haven't support the chapters namespace yet.
