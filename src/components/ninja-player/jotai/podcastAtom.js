import {atom} from "jotai"
import {playingIdAtom, playerAtom} from './playerAtom'
import {feedParser, getApi} from './../libs'

export const tabAtom = atom('main');
export const tabsAtom = atom({});
export const tabsMenuAtom = atom([]);
export const episodesAtom = atom([]);
export const chaptersAtom = atom([]);
export const loadingAtom = atom(false);
export const fetchingAtom = atom(false);
export const errorMessageAtom = atom('');
export const currentPageAtom = atom(1);
export const totalPageAtom = atom(1);
export const nextPageAtom = atom(1);

export const fetchChaptersAtom = atom((get) => get(chaptersAtom), (_get, set, _) => {
  const episodes = _get(episodesAtom);
  const playingId = _get(playingIdAtom);

  const fetchDate = async () => {
    const chaptersUrl = episodes[playingId]['chaptersUrl'];

    try {
      const response = await fetch(chaptersUrl);
      const data = await response.json()
      const chapters = data.chapters // data.chapters && data.chapters.length > 0 ? data.chapters : [];
      const _chapters = chapters.map((ch, idx) => {
        const nextCh = chapters[idx+1];
        if(nextCh) {
          const endTime = nextCh['startTime'];
          return {...ch, endTime}
        } else {
          return {...ch, endTime: ch['startTime'] + 100000000}; // end time is some large number
        }
      })
      set(chaptersAtom, _chapters);
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
  const currentPage = _get(currentPageAtom);
  const currentEpisodes = _get(episodesAtom);

  const {rssFeedUrl, proxy, episodes, jcPodcastApi, signal} = params;  
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

        if(item.itunes && item.itunes.image && item.itunes.image.$ && item.itunes.image.$.href && item.itunes.image.$.href.length > 5) {
          artworkUrl = item.itunes.image;
        }

        let chaptersUrl = null;
        if(item.chapters && item.chapters.$ && item.chapters.$.url) {
          chaptersUrl = item.chapters.$.url;
        }

        if(item.enclosure) {
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
        }
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

  const fetchPodcast = async () => {
    try {
      const res = await getApi(jcPodcastApi, currentPage, {signal})
      const {audioposts, show, total, current_page, next_page} = res;
      const {podcast_title} = show;
      const items = audioposts.map((item) => {
        return {
          title: item.name,
          podcastTitle: podcast_title,
          artworkUrl: item.artwork_url,
          pubDate: item.audio_date,
          link: item.permulink,
          audioUrl: item.audio_url,
          // chaptersUrl: chaptersUrl,
          description: item.description
        }
      })
      if(current_page === 1) {
        set(loadingAtom, false);
      }
      set(fetchingAtom, false) 
      set(episodesAtom, [...currentEpisodes, ...items]);
      set(errorMessageAtom, '');
      set(totalPageAtom, total);
      set(currentPageAtom, current_page);
      set(nextPageAtom, next_page);
    } catch (err) {
      set(loadingAtom, false);
      set(fetchingAtom, false)
      set(episodesAtom, []);
      set(totalPageAtom, 1);
      set(currentPageAtom, 1);
      set(errorMessageAtom, `${rssFeedUrl} is not able to reach.  Please try again later. ${JSON.stringify(err)}`);
      if(signal.aborted) return;
    }
  }

  if(rssFeedUrl && rssFeedUrl.length > 6) {
    set(loadingAtom, true);
    fetchDate()
  } else if(jcPodcastApi) {
    if(currentPage === 1) {
      set(loadingAtom, true);
    }
    set(fetchingAtom, true)
    fetchPodcast();
  } else {
    set(loadingAtom, false);
    set(episodesAtom, episodes);
    set(errorMessageAtom, '');
  }
  const playerState = _get(playerAtom);
  set(playerAtom, {...playerState, playing: false})
})


