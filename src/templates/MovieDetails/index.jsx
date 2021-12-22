import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from 'hooks/useFetch';
import MoviesService from 'services/MoviesService';

import MovieHeader from 'components/MovieHeader';
import MovieActors from 'components/MovieActors';
import MovieRecommendations from 'components/MovieRecommendations';
import Loading from 'components/Loading';
import Icon from 'components/Icon';

import { FullLoadingContainer } from 'design/shared.styles';
import { Container, NavContainer } from './styles';

const MovieDetailsTemplate = function ({ movieId }) {
  const [{ data: movie, loading }] = useFetch(() => MoviesService.getMovie(movieId), [movieId]);

  if (loading || !movie) {
    return (
      <FullLoadingContainer>
        <Loading size={200} />
      </FullLoadingContainer>
    );
  }

  return (
    <Container>
      <NavContainer>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Icon icon="chevron-right" color="gray" size="md" />
        <span>{movie.title}</span>
      </NavContainer>
      <MovieHeader movie={movie} />
      <MovieActors movieId={movieId} />
      <MovieRecommendations movieId={movieId} />
    </Container>

  );
};

export default MovieDetailsTemplate;
