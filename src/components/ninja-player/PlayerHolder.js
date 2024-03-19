import React from 'react'
import {useAtom} from "jotai"
import ReactPlayer from 'react-player'
import {
  playerAtom, episodesAtom, updatePlayerAtom,
  updatePlayingIdAtom, playingIdAtom
} from './jotai'

const PlayerHolder = ({jcCallback}) => {
  const [playerState] = useAtom(playerAtom);
  const [episodes] = useAtom(episodesAtom);
  const [_, updatePlayer] = useAtom(updatePlayerAtom);
  const [playerId] = useAtom(playingIdAtom)
  const [, updatePlayingId] = useAtom(updatePlayingIdAtom);

  // console.log(playerId)

  if(playerId >= 0 && episodes.length > 0 && playerId >= 0 && playerId < episodes.length) {
    const { audioUrl, id } = episodes[playerId];

    return (
      <ReactPlayer
        url={audioUrl}
        controls={false}
        height={"0"}
        width={"0"}
        playbackRate={playerState.playbackRate}
        config={{
          file: {
            forceAudio: true,
            attributes: {
              preload: "none"
            }
          }
        }}
        onProgress={(res) => {
          if(playerState.onSeeking === false) {
            const playedSeconds = res.playedSeconds;
            updatePlayer({playedSeconds})
          }
        }}
        onReady={(res) => {
          if(res) {
            updatePlayer({
              onReady: true,
              durationSeconds: res.getDuration(),
              playerRef: res
            })
          }
        }}
        onError={(err) =>{
          // TODO: some sort of callback
          console.log('can not load', err);
        }}
        onEnded={() => {
          const idx = playerId+ 1;
          if(idx < episodes.length) {
            // go to the next episode
            updatePlayer({
              durationSeconds: 0,
              playedSeconds: 0,
              playing: true,
              onReady: false
            })

            updatePlayingId(idx);
          }
        }}
        onStart={() => {
          if(jcCallback && id) {
            jcCallback(id)
          }
        }}
        playing={playerState.playing}
        volume={playerState.volume}
      />
    )
  }

  return null;
}

export default PlayerHolder;