import axios from 'axios'

const updateUrlPage = (endpoint, page) => {
  if(page) {
    if(endpoint.indexOf("?") === -1) {
      return `${endpoint}?page=${page}`
    } else {
      return `${endpoint}&page=${page}`
    }
  } else {
    return endpoint;
  }
}

export const getApi = async(endpoint, page = 1, options = {}) => {
  const url = updateUrlPage(endpoint, page);
  const response = await axios.get(url, options)
  return response.data;
}