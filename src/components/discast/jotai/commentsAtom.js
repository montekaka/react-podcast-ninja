import {atom} from "jotai"
import {getSecondsFromHHMMSS} from '../libs'
import {screenAtom} from './screenAtom'

export const commentsAtom = atom([]);

export const commentAtom = atom({
  startSecond: 120,
  endSecond: 180,
  startTime: "00:02:00",
  endTime: "00:03:00",
  message: "",
  author: "",
})

export const cancelCommentAtom = atom(null, (get, set, _) => {
  set(commentAtom, {
    startSecond: 120,
    endSecond: 180,
    startTime: "00:02:00",
    endTime: "00:03:00",
    message: "",
    author: "",
  })
  set(screenAtom, 'main')
})

export const updateNewCommentAtom = atom((get) => get(commentAtom), (_get, set, newData) => {
  const currentState = _get(commentAtom);
  set(commentAtom, {...currentState, ...newData});  
})

export const updateNewCommentTime = atom((get) => get(commentAtom), (_get, set, newData) => {
  const currentState = _get(commentAtom);
  const key = Object.keys(newData)[0];
  const value = newData[key];
  
  if(key === "startTime") {
    const startSecond = getSecondsFromHHMMSS(value);
    set(commentAtom, {...currentState, ...newData, startSecond})
  } else {
    const endSecond = getSecondsFromHHMMSS(value);
    set(commentAtom, {...currentState, ...newData, endSecond})
  }
})