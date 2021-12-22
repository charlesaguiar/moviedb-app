import React, { useEffect, useState } from 'react';
import { useMoviesContext } from 'contexts/MoviesContext';

import Icon from 'components/Icon';

import { Container, Input, SearchIconContainer } from './styles';

const SearchInput = function () {
  const [query, setQuery] = useState('');
  const [moviesContext, setMoviesContext] = useMoviesContext();

  useEffect(() => {
    setQuery(moviesContext.searchTerm);
  }, [moviesContext.searchTerm]);

  const handleSearch = () => {
    setMoviesContext({ searchTerm: query });
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIconContainer onClick={handleSearch}>
        <Icon icon="search" color="gray" />
      </SearchIconContainer>
    </Container>
  );
};

export default SearchInput;
