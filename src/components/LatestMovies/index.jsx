import React from 'react';

import Movie from 'components/Movie';

import { Container, GridContainer, Title } from './styles';

const LatestMovies = function ({ movies, onSeeMore }) {
  return (
    <Container>
      <Title>Latest Releases</Title>
      <GridContainer>
        {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </GridContainer>
      <button type="button" onClick={onSeeMore}>Teste</button>
    </Container>
  );
};

export default LatestMovies;
