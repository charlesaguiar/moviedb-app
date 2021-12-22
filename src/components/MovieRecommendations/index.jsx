import React from 'react';

import useFetch from 'hooks/useFetch';
import MoviesService from 'services/MoviesService';

import Movie from 'components/Movie';
import Loading from 'components/Loading';

import { FullLoadingContainer } from 'design/shared.styles';
import { Container, Title, Gallery } from './styles';

const MovieRecommendations = function ({ movieId }) {
  const [{ data: recommended, loading }] = useFetch(
    () => MoviesService.getMovieRecommendations(movieId, 12),
    [movieId],
  );

  if (loading || !recommended) {
    return (
      <FullLoadingContainer>
        <Loading size={200} />
      </FullLoadingContainer>
    );
  }

  return (
    <Container>
      <Title>Recommended</Title>
      <Gallery>
        {recommended?.map((movie) => (
          <Movie key={movie.id} movie={movie} size="small" />
        ))}
      </Gallery>
    </Container>
  );
};

export default MovieRecommendations;
