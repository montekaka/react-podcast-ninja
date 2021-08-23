import React from 'react';
import {useAtom} from 'jotai'
import {
  enclosureUrlAtom,
  playerAtom,
  metasAtom,
  togglePlayPauseAtom
} from './jotai'
import PlayPauseButton from './PlayPauseButton'
import Artwork from './Artwork'
import ForwardBackwardButton from './ForwardBackwardButton'

const PlayerContainer = () => {

  const [playerState] = useAtom(playerAtom);
  const [metaState] = useAtom(metasAtom);

  return (
    <div className="bh-player-container">
      <div className="bh-player-controllers">
        <ForwardBackwardButton id="backward"/>
        <ForwardBackwardButton id="forward"/>
        <Artwork src={metaState.src}>
          <PlayPauseButton/>
        </Artwork>
      </div>
      <div>Title</div>
    </div>
  )
}

export default PlayerContainer