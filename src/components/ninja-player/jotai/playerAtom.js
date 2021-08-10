import {atom} from "jotai"

export const playerAtom = atom({
  // playingId: 0,
  durationSeconds: 0,
  playedSeconds: 0,
  seekSeconds: 0,
  onSeeking: false,
  onReady: false,
  playing: false,
  playerRef: null
})

export const playingIdAtom = atom(0);

export const updatePlayingIdAtom = atom((get) => get(playingIdAtom), (_get, set, id) => {
  set(playingIdAtom, id);
})

export const updatePlayerAtom = atom(
  (get) => get(playerAtom), 
  (_get, set, update) => {
    const currentState = _get(playerAtom);
    set(playerAtom, {...currentState, ...update})
  }
)

export const togglePlayPauseAtom = atom((get) => get(playerAtom), (_get, set, _) => {
  const currentState = _get(playerAtom);
  const {playing} = currentState
  set(playerAtom, {...currentState, playing: !playing});
})

export const updatePlayedTimeAtom = atom((get) => get(playerAtom),  (_get, set, seconds) => {
  const currentState = _get(playerAtom);;
  const {durationSeconds, playerRef} = currentState
  let playedSeconds = seconds;
  if(seconds >= durationSeconds) {
    playedSeconds = durationSeconds;
  } else if (seconds <= 0 ){
    playedSeconds = 0;
  }
  playerRef.seekTo(playedSeconds);
  set(playerAtom, {...currentState, playedSeconds});
})