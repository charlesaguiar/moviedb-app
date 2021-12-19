import api from 'config/api';

const getMovies = (parameters) => {
  const filter = parameters?.filter || 'popular';
  return api.get(`/movie/${filter}`, { params: { page: parameters?.page || 1 } });
};

const getMovie = (id) => api.get(`/movie/${id}`);

const getMovieActors = (movieId) => api.get(`/movie/${movieId}/credits`);

const getMovieRecommendations = (movieId) => api.get(`/movie/${movieId}/recommendations`, {
  params: {
    language: 'null',
    page: 1,
  },
});

export default {
  getMovies,
  getMovie,
  getMovieActors,
  getMovieRecommendations,
};
