import {atom} from "jotai"

export const commentsAtom = atom([]);

export const commentAtom = atom({
  startSecond: 0,
  endSecond: 120,
  startTime: "00:00:00",
  endTime: "00:02:00",
  message: "",
  author: "",
})

export const updateNewCommentAtom = atom((get) => get(commentAtom), (_get, set, newData) => {
  const currentState = _get(commentAtom);
  set(commentAtom, {...currentState, ...newData});
})