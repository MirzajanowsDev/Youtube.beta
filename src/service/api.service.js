import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults:50,
  },
  headers: {
    'X-RapidAPI-Key': 'a51276e84fmshaa3401181914d67p1e899fjsnbb4253c1fe1a',
    'X-RapidAPI-Host':'youtube-v31.p.rapidapi.com',
 }
};


export const AuthService = {
    async fetching(url){
        const {data} = await axios(`https://youtube-v31.p.rapidapi.com/${url}`,options)
        return data
    }
}