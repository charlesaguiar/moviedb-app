import React from 'react';

import Icon from 'components/Icon';

import { Container, Input, SearchIconContainer } from './styles';

const SearchInput = function () {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search movies..."
      />
      <SearchIconContainer>
        <Icon icon="search" color="gray" />
      </SearchIconContainer>
    </Container>
  );
};

export default SearchInput;
