import {atom} from "jotai"

export const screenAtom = atom('main')

export const updateScreenAtom = atom((get) => get(screenAtom), (_get, set, val) => {
  set(screenAtom, val);
})

export const getScreenNameAtom = atom(get => {
  const state = get(screenAtom);
  return state;
})