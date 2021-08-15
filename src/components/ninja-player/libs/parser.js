import Parser from 'rss-parser';
import axios from 'axios'

const parser = new Parser({
  customFields: {
    item: [
      ["podcast:chapters", "chapters"] // rename the filed to chapters
    ]
  }
})


export const feedParser = (rssFeed, proxy) => {
  if(proxy && proxy.length > 0) {
    return axios.get(`${proxy}${rssFeed}`)
  } else {
    return parser.parseURL(rssFeed)
  }
}
