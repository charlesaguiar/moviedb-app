import React from 'react';
import { useMoviesContext } from 'contexts/MoviesContext';

import Icon from 'components/Icon';

import { Container, Input, SearchIconContainer } from './styles';

const SearchInput = function () {
  const [moviesContext, setMoviesContext] = useMoviesContext();

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search movies..."
        value={moviesContext.searchTerm}
        onChange={(e) => setMoviesContext({ searchTerm: e.target.value })}
      />
      <SearchIconContainer>
        <Icon icon="search" color="gray" />
      </SearchIconContainer>
    </Container>
  );
};

export default SearchInput;
