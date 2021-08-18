import {atom} from "jotai"
import {playingIdAtom, playerAtom} from './playerAtom'
import {feedParser} from './../libs'

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

// const podcast = {
//   menuItems: [{id:'subscribe', label: 'Subscribe', id: 'social', label: "Social"}],
//   'subscribe': [{id: 'rss', url: 'https://feed.justcast.com/shows/inside-the-aluminum-tube-with-shanon-baker/audioposts.rss'}],
//   'social': [
//     {id: 'twitter', url: 'https://twitter.com/thejustcast'}
//   ]
// }

export const tabAtom = atom('main');
export const tabsAtom = atom({});
export const tabsMenuAtom = atom([]);
export const episodesAtom = atom([]);
export const chaptersAtom = atom([]);
export const loadingAtom = atom(false);
export const errorMessageAtom = atom('');

export const fetchChaptersAtom = atom((get) => get(chaptersAtom), (_get, set, _) => {
  const episodes = _get(episodesAtom);

  const playingId = _get(playingIdAtom);
  const fetchDate = async () => {
    const chaptersUrl = episodes[playingId]['chaptersUrl'];
    try {
      const response = await fetch(chaptersUrl);
      const data = await response.json()
      const chapters = data.chapters // data.chapters && data.chapters.length > 0 ? data.chapters : [];
      set(chaptersAtom, chapters);
    } catch (err) {
      set(chaptersAtom, [])
    }
  }

  if(episodes.length > 0 && episodes[playingId] && episodes[playingId]['chaptersUrl']) {
    fetchDate()
  } else {
    set(chaptersAtom, [])    
    // set(chaptersAtom, [])
  }
});

export const fetchEpisodesAtom = atom((get) => get(episodesAtom), (_get, set, params) => {
  const {rssFeedUrl, proxy, episodes} = params;  

  const fetchDate = async () => {
    
    try {
      const res = await feedParser(rssFeedUrl, proxy)
      const feed = proxy && proxy.length > 0 ? res.data : res;
      let feedArtwork = ""
      if (feed.image && feed.image.url) {
        feedArtwork = feed.image.url;
      } else if (feed.itunes && feed.itunes.image) {
        feedArtwork = feed.itunes.image;
      }
      // const feedArtwork = feed.image.url;
      const podcastTitle = feed.title;
      const items = [];
      
      feed.items.forEach((item) => {
        let artworkUrl = feedArtwork;
        if(item.itunes && item.itunes.image) {
          artworkUrl = item.itunes.image;
        }

        let chaptersUrl = null;
        if(item.chapters && item.chapters.$ && item.chapters.$.url) {
          chaptersUrl = item.chapters.$.url;
        }

        // console.log(artworkUrl)
        items.push({
          title: item.title,
          podcastTitle: podcastTitle,
          artworkUrl: artworkUrl,
          pubDate: item.pubDate,
          link: item.link,
          audioUrl: item.enclosure.url,
          chaptersUrl: chaptersUrl,
          description: item.content
        })
      }) 
      
      set(loadingAtom, false);
      set(episodesAtom, items);
      set(errorMessageAtom, '');
    } catch (err) {
      set(loadingAtom, false);
      set(episodesAtom, []);
      set(errorMessageAtom, `${rssFeedUrl} is not able to reach.  Please try again later. ${JSON.stringify(err)}`);
    }    
  }

  if(rssFeedUrl && rssFeedUrl.length > 6) {
    set(loadingAtom, true);
    fetchDate()
  } else {
    set(loadingAtom, false);
    set(episodesAtom, episodes);
    set(errorMessageAtom, '');
  }
  const playerState = _get(playerAtom);
  set(playerAtom, {...playerState, playing: false})
})


