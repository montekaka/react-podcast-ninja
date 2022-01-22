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

[`Demo page`](https://widget.justcast.com/widget?rss=https://podnews.net/rss&primaryBackgroundColor=0c1824&primaryButtonColor=f7f8f9&primaryTextColor=f7f8f9&progressBarFilledColor=f7f8f9&progressBarBackgroundColor=8A8175&playlistBackgroundColor=30343c&playlistTextColor=f7f8f9&chapterBackgroundColor=30343c&chapterTextColor=f7f8f9)

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
While adding the PodcastIndex chapters namespace support to  [`JustCast`](https://justcast.com), I began noticing most of podcast widget players haven't support the chapters namespace yet.  

I hope more podcasters can enbrace the chapters namespace, and someone can use it to get a head start into building something amazing!

## Contributions
If you would like to contribute to this open source project, please feel free to submit a PR.


## Todo

- Add support to person tag
- Better integration with PodcastIndex
  - fetch podcast per podcast_index_id
  - handle query episode_id from the url
  - handle query episode playing seconds from the url
- Chapter
  - add an indicator to playing chapter
  - scroll to the right chapter position
  - add support to chapter image
  - add support to chapter link
- Add support create share link