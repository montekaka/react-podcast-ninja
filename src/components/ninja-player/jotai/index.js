import {
  playerAtom,
  playingIdAtom,
  updatePlayingIdAtom,
  updatePlayerAtom,
  togglePlayPauseAtom,
  updatePlayedTimeAtom,
  resetPlayerAtom
} from './playerAtom'

import {
  playerSkinAtom,
  playerSkinOptions,
  updateColorAtom
} from './playerSkinAtom'

import {
  errorMessageAtom,
  loadingAtom,
  fetchEpisodesAtom,
  tabAtom,
  episodesAtom,
  fetchChaptersAtom,
  chaptersAtom
} from './podcastAtom'

export {
  errorMessageAtom,
  loadingAtom,  
  fetchEpisodesAtom,
  chaptersAtom,
  fetchChaptersAtom,
  resetPlayerAtom,
  tabAtom,
  playerAtom,
  playingIdAtom,
  updatePlayingIdAtom,
  updatePlayerAtom,
  togglePlayPauseAtom,
  updatePlayedTimeAtom,
  playerSkinAtom,
  playerSkinOptions,
  updateColorAtom,
  episodesAtom  
}