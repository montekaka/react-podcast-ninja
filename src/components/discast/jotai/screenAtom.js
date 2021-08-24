import {atom} from "jotai"

export const screenAtom = atom({
  main: true
})

export const updateScreenAtom = atom((get) => get(screenAtom), (_get, set, val) => {
  const state = _get(screenAtom);
  set(screenAtom, {...state, ...val});
})

export const getScreenNameAtom = atom(get => {
  const state = get(screenAtom);
  if(state.main) {
    return 'main'
  } else {
    return '';
  }
})