import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: 'en-US',
  },
});

export default api;
