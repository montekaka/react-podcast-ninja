import {atom} from "jotai"
import {commentAtom, commentsAtom} from './commentsAtom'

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
  playStopSeconds: null,
  previewStartSeconds: null,
  playingCommentIdx: null
})

export const playerIsLoadingAtom = atom((get) => {
  const state = get(playerAtom);
  return state.onReady === false && state.playing === true
})

export const updatePlayerAtom = atom(
  (get) => get(playerAtom), 
  (_get, set, update) => {
    const currentState = _get(playerAtom);
    set(playerAtom, {...currentState, ...update})
  }
)

export const togglePlayPauseAtom = atom((get) => get(playerAtom), (_get, set, playStopSeconds) => {
  const currentState = _get(playerAtom);
  const {playing, playIconId, onReady} = currentState;
  // if(onReady !== true) {
  //   document.getElementById(playIconId).click();
  // }
  set(playerAtom, {...currentState, playing: !playing, playStopSeconds, previewStartSeconds: null, playingCommentIdx: null});
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

export const messagePlayPreview = atom((get) => get(playerAtom), (_get, set, _) => {
  const currentState = _get(playerAtom);
  const comment = _get(commentAtom);
  const {startSecond, endSecond} = comment;
  const {playing, playIconId, onReady, playerRef} = currentState;

  if(onReady !== true) {
    // document.getElementById(playIconId).click();
    set(playerAtom, {...currentState, playing: true, playedSeconds: startSecond, playStopSeconds: endSecond, previewStartSeconds: startSecond, playingCommentIdx: null});
  } else {
    playerRef.seekTo(startSecond);

    if(playing === false) {      
      set(playerAtom, {...currentState, playing: true, playStopSeconds: endSecond, previewStartSeconds: null, playingCommentIdx: null});
    } else {
      set(playerAtom, {...currentState, playStopSeconds: endSecond, previewStartSeconds: null, playingCommentIdx: null});
    }
  }
})

export const playCommentAtom = atom(null, (get, set, idx) => {
  const comments = get(commentsAtom);
  const currentState = get(playerAtom);

  const {playing, playIconId, onReady, playerRef} = currentState;
  const {startSecond, endSecond} = comments[idx];

  if(onReady !== true) {
    // document.getElementById(playIconId).click();
    set(playerAtom, {...currentState, playing: true, playedSeconds: startSecond, playStopSeconds: endSecond, previewStartSeconds: startSecond, playingCommentIdx: idx});
  } else {
    playerRef.seekTo(startSecond);

    if(playing === false) {      
      set(playerAtom, {...currentState, playing: true, playStopSeconds: endSecond, previewStartSeconds: null, playingCommentIdx: idx});
    } else {
      set(playerAtom, {...currentState, playStopSeconds: endSecond, previewStartSeconds: null, playingCommentIdx: idx});
    }
  }
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
    previewStartSeconds: null,
    playingCommentIdx: null,
    playStopSeconds: null
  }))
}) 