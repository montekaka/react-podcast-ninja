import {atom} from "jotai"

// export interface PlayerSkin {
//   primaryBackgroundColor: string;
//   primaryButtonColor: string;
//   primaryTextColor: string;
//   progressBarBackgroundColor: string;
//   progressBarFilledColor: string;
//   playlistBackgroundColor: string;
//   playlistTextColor: string;
//   chapterBackgroundColor?: string;
//   chapterTextColor: string;
// }

export const playerSkinAtom = atom({
  primaryBackgroundColor: "#3B1F50",
  primaryButtonColor: "#D933C3",
  primaryTextColor: "#f7f8f9",
  progressBarFilledColor: "#D933C3",
  progressBarBackgroundColor: "#8A8175",
  // progressBarThumbColor: "#02030A",
  playlistBackgroundColor: "#522657",
  playlistTextColor: "#f7f8f9",
  chapterBackgroundColor: "#522657",
  chapterTextColor:  "#f7f8f9"
});

export const playerSkinOptions = atom([
  {label: "Background color", id: 'primaryBackgroundColor'},
  {label: "Button color", id: 'primaryButtonColor'},
  {label: "Text color", id: 'primaryTextColor'},
  {label: "Time slider filled color", id: 'progressBarFilledColor'},
  {label: "Time slider color", id: 'progressBarBackgroundColor'},
  {label: "Playlist background color", id: 'playlistBackgroundColor'},
  {label: "Playlist text color", id: 'playlistTextColor'},
  {label: "Chapter background color", id: 'chapterBackgroundColor'},
  {label: "Chapter text color", id: 'chapterTextColor'},  
])

export const updateColorAtom = atom((get) => get(playerSkinAtom), (_get, set, value) => {
  const colors = _get(playerSkinAtom);
  set(playerSkinAtom, {...colors, ...value})
})