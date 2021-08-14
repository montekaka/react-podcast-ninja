import { useState, useEffect } from "react";
import {feedParser} from './../libs'

const useFetchRss = (rssFeed, proxy) => {
  // const [rssFeed, setRssFeed] = useState('');
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if(rssFeed && rssFeed.length > 1) {
      setLoading(true);
      feedParser(rssFeed, proxy)
      .then((res) => {
        console.log(res)
        const feed = proxy && proxy.length > 0 ? res.data : res;
        // console.log(feed)
        const feedArtwork = feed.image.url;
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
        setLoading(false);
        setEpisodes(items);
        setErrorMessage('')
      })
      .catch((err) => {
        setLoading(false);
        setEpisodes([]);
        setErrorMessage(`${rssFeed} is not able to reach.  Please try again later. ${JSON.stringify(err)}`)
        // setErrorMessage(JSON.stringify(err))
      })
    } else {
      setLoading(false);
      setEpisodes([]);
    }
  }, [rssFeed, proxy]) 

  return [episodes, loading, errorMessage];
}

export default useFetchRss;