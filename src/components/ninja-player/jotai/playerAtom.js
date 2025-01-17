import {atom} from "jotai"

export const playingIdAtom = atom(-1);

export const playerAtom = atom({
  // playingId: 0,
  durationSeconds: 0,
  playedSeconds: 0,
  seekSeconds: 0,
  playbackRate: 1,
  onSeeking: false,
  onReady: false,
  playing: false,
  playerRef: null,
  volume: 0.3,
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
  const currentState = _get(playerAtom);
  const {durationSeconds, playerRef} = currentState;
  let playedSeconds = seconds;
  if(seconds >= durationSeconds) {
    playedSeconds = durationSeconds;
  } else if (seconds <= 0 ){
    playedSeconds = 0;
  }
  playerRef.seekTo(playedSeconds);
  set(playerAtom, {...currentState, playedSeconds, playing: true});
})

export const togglePlaybackRateAtom = atom((get) => get(playerAtom), (_get, set, _) => {
  const rateOptions = [1, 1.2, 1.4, 1.6, 1.8, 2];

  const currentState = _get(playerAtom);
  const {playbackRate} = currentState;
  const k = rateOptions.indexOf(playbackRate);
  const n = rateOptions.length;
  const r = k + 1

  if(r >= n) {
    set(playerAtom, {...currentState, playbackRate: 1});
  } else {    
    set(playerAtom, {...currentState, playbackRate: rateOptions[r]});
  }
})