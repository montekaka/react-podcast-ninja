import {atom} from "jotai"

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
// export const 