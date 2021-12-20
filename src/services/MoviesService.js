import MoviesRepository from 'repositories/MoviesRepository';

const getMovies = async (parameters) => {
  const results = await MoviesRepository.getMovies(parameters);
  return results.data;
};

const getMovie = (id) => MoviesRepository.getMovie(id);

const getMovieActors = (movieId) => MoviesRepository.getMovieActors(movieId);

const getMovieRecommendations = (movieId) => MoviesRepository.getMovieRecommendations(movieId);

export default {
  getMovies,
  getMovie,
  getMovieActors,
  getMovieRecommendations,
};
