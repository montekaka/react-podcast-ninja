import { useState, useEffect } from "react";
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: [
      ["podcast:chapters", "chapters"] // rename the filed to chapters
    ]
  }
})

const useFetchRss = (rssFeed) => {
  // const [rssFeed, setRssFeed] = useState('');
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if(rssFeed && rssFeed.length > 1) {
      setLoading(true);
      parser.parseURL(rssFeed)
      .then((feed) => {
        const feedArtwork = feed.image?.url;
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
            chaptersUrl: chaptersUrl
          })
        })  
        setLoading(false);
        setEpisodes(items);
      })
      .catch((err) => {
        setLoading(false);
        setEpisodes([]);
        // setErrorMessage(`${rssFeed} is not able to reach.  Please try again later.`)
        setErrorMessage(JSON.stringify(err))
      })
    }    
  }, [rssFeed]) 

  return [episodes, loading, errorMessage];
}

export default useFetchRss;