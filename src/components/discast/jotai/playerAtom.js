import {atom} from "jotai"

export const enclosureUrlAtom = atom('');

export const playerAtom = atom({
  // playingId: 0,
  durationSeconds: 0,
  playedSeconds: 0,
  seekSeconds: 0,
  onSeeking: false,
  onReady: false,
  playing: false,
  playerRef: null,
  playIconId: null,
  volume: 0.3,
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
  const {playing, playIconId, onReady} = currentState;
  if(onReady !== true) {
    document.getElementById(playIconId).click();
  }
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

export const resetPlayerAtom = atom((get) => get(playerAtom), (_get, set, _) => {
  set(playerAtom, (prev) =>({
    ...prev,
    durationSeconds: 0,
    playedSeconds: 0,
    seekSeconds: 0,
    onSeeking: false,
    onReady: false,
    playing: false,
    // playerRef: null,
    volume: 0.3,
  }))
}) 