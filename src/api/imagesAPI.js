import axios from 'axios'
import { URL } from './axiosInstance'

export const getImagesData = async () => {
  return axios.get(URL)
}
