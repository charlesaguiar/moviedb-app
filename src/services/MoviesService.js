import MoviesRepository from 'repositories/MoviesRepository';

const getMovies = async (parameters) => {
  let results = null;
  if (parameters.query) {
    results = await MoviesRepository.searchMovies(parameters);
    return results.data;
  }

  results = await MoviesRepository.getMovies(parameters);
  return results.data;
};

const getMovie = async (id) => {
  const results = await MoviesRepository.getMovie(id);
  return results.data;
};

const getMovieActors = async (movieId, limit = null) => {
  const { data: { cast } } = await MoviesRepository.getMovieActors(movieId);

  if (limit) {
    return [...cast].slice(0, limit);
  }

  return cast;
};

const getMovieRecommendations = (movieId) => MoviesRepository.getMovieRecommendations(movieId);

const getGenres = async () => {
  const results = await MoviesRepository.getGenres();
  return results.data;
};

export default {
  getMovies,
  getMovie,
  getMovieActors,
  getMovieRecommendations,
  getGenres,
};
