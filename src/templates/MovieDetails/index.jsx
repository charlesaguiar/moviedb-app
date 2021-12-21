import React from 'react';

import useFetch from 'hooks/useFetch';
import MoviesService from 'services/MoviesService';

import MovieHeader from 'components/MovieHeader';
import MovieActors from 'components/MovieActors';

import { Container } from './styles';

const MovieDetailsTemplate = function ({ movieId }) {
  const [{ data: movie, loading }] = useFetch(() => MoviesService.getMovie(movieId), [movieId]);

  if (loading || !movie) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <MovieHeader movie={movie} />
      <MovieActors movieId={movieId} />
    </Container>

  );
};

export default MovieDetailsTemplate;
