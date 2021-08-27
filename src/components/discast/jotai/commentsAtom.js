import {atom} from "jotai"

export const commentsAtom = atom([]);

export const commentAtom = atom({
  startSecond: 120,
  endSecond: 180,
  startTime: "00:02:00",
  endTime: "00:03:00",
  message: "",
  author: "",
})

export const updateNewCommentAtom = atom((get) => get(commentAtom), (_get, set, newData) => {
  const currentState = _get(commentAtom);
  set(commentAtom, {...currentState, ...newData});
})