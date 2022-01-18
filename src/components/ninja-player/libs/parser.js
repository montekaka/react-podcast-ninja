import Parser from 'rss-parser';
import axios from 'axios'


export const feedParser = (rssFeed, proxy, userAgent) => {
  if(proxy && proxy.length > 0) {
    return axios.get(`${proxy}${rssFeed}`)
  } else {
    const headers = {'User-Agent': userAgent ? userAgent : "JustCast-Widget"};

    const parser = new Parser({
      headers,
      customFields: {
        item: [
          ["podcast:chapters", "chapters"] // rename the filed to chapters
        ]
      }
    })    
    return parser.parseURL(rssFeed)
  }
}
