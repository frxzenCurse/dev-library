import axios from "axios"
import { API_URL } from "../data/config"


export const contentService = {
  getContent: (catId) => {
    return axios.get(`${API_URL}/content/${catId}`)
  }
}