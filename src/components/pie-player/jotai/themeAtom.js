import {atom} from "jotai"

export const themeAtom = atom({
  backgroundColor: "",
  textColor: "",
  cardBackgroundColor: "",
  cardTextColor: "",
  cardButtonColor: "",
  cardButtonTextColor: "",  
  themeClassName: "",
});

export const setThemeAtom = atom((get) => {
  return get(themeAtom)
}, (_get, set, payload) => {
  const state = _get(themeAtom);
  set(themeAtom, {...state, ...payload});
})