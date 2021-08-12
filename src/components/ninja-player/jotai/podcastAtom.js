import {atom} from "jotai"
import {playingIdAtom} from './playerAtom'
// export interface Episode {
//   title: string;
//   artworkUrl: string;
//   pubDate: Date;
//   audioUrl: string;
//   chaptersUrl?: string;
//   podcastTitle: string;
//   link: string;
//   description: stirng;
// }

export const tabAtom = atom('main');
export const episodesAtom = atom([]);

export const chaptersUrlAtom = atom((get) => {
  const episodes = get(episodesAtom);
  const playingId = get(playingIdAtom);
  if(episodes.length > 0 && episodes[playingId] && episodes[playingId]['chaptersUrl']) {
    return episodes[playingId]['chaptersUrl'];
  } else {
    return null;
  }
});
// export const fetchChaptersAtom = atom(async () => fetch())

export const fetchChaptersAtom = atom(async (get) => {
  const chaptersUrl = get(chaptersUrlAtom);
  if(chaptersUrl) {
    const res = await fetch(chaptersUrl);
    const data = await res.json()
    if(data.chapters && data.chapters.length > 0) {
      return data.chapters;
    } else {
      return [];
    }
  } else {
    return [];
  }
})
// export const 