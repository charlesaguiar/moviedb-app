import MoviesRepository from 'repositories/MoviesRepository';

const getMovies = (parameters) => MoviesRepository.getMovies(parameters);

const getMovie = (id) => MoviesRepository.getMovie(id);

const getMovieActors = (movieId) => MoviesRepository.getMovieActors(movieId);

const getMovieRecommendations = (movieId) => MoviesRepository.getMovieRecommendations(movieId);

export default {
  getMovies,
  getMovie,
  getMovieActors,
  getMovieRecommendations,
};
