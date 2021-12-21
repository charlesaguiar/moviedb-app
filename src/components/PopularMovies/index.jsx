import React from 'react';

import { useMoviesContext } from 'contexts/MoviesContext';

import Movie from 'components/Movie';
import Pagination from 'components/Pagination';

import { Container, GridContainer, Title } from './styles';

const PopularMovies = function () {
  const [moviesContext] = useMoviesContext();

  return (
    <Container>
      <Title>{moviesContext.searchTerm ? `Search Results for "${moviesContext.searchTerm}"` : 'Popular Releases'}</Title>
      <GridContainer>
        {moviesContext.movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </GridContainer>
      <Pagination />
    </Container>
  );
};

export default PopularMovies;
