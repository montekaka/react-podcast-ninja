import React, {Suspense} from 'react';
import {Provider} from 'jotai'
import PlaylistPlayer from './PlaylistPlayer';
import './ninja-player.css';
import './retro-player.css';
import WaveSvg from './WaveSvg';

const NinjaPlayer = ({
  playerId, themeName, podcast, episodes, configs, singleEpisode, rssFeedUrl, proxy, jcPodcastApi, jcCallback
}) => {

  return (
    <Suspense fallback={<></>}>
      <Provider>
        <PlaylistPlayer
          themeName={themeName}
          playerId={playerId}
          podcast={podcast}
          episodes={episodes}
          rssFeedUrl={rssFeedUrl}
          proxy={proxy}
          configs={configs}
          singleEpisode={singleEpisode}
          jcPodcastApi={jcPodcastApi}
          jcCallback={jcCallback}
        />
        {/* <WaveSvg/> */}
      </Provider>
    </Suspense>
  )
}

export default NinjaPlayer;

