import {atom} from "jotai"

export const commentsAtom = atom([]);

export const commentAtom = atom({
  fromSeconds: 0,
  toSecond: 0,
  fromTimeStr: "00:00:00",
  endTimeStr: "00:00:00",
  message: "",
  author: "",
  id: 0
})