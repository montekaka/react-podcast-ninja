import axios from 'axios'

export const getApi = async(endpoint, page = 1, options = {}) => {
  const response = await axios.get(`${endpoint}?page=${page}`, options)
  return response.data;
}