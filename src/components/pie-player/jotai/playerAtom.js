import {atom} from "jotai"

export const playingIdAtom = atom(-1);

export const updatePlayingIdAtom = atom((get) => {
  return get(playingIdAtom)
}, (_get, set, id) => {
  set(playingIdAtom, id);
})

export const playerAtom = atom({
  // playingId: 0,
  durationSeconds: 0,
  playedSeconds: 0,
  seekSeconds: 0,
  onSeeking: false,
  onReady: false,
  playing: false,
  playerRef: null,
  volume: 0.3,
  url: null,
  playingId: -1,
})

export const upatePlayerAtom = atom((get) => {
  return get(playerAtom)
}, (_get, set, payload) => {
  const state = _get(playerAtom)
  set(playerAtom, {...state, ...payload});  
})
