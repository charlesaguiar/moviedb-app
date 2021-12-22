import React from 'react';

import Icon from 'components/Icon';

import { Container } from './styles';

const MoviePosterPlaceholder = function ({ size = { width: '150px', height: '225px' }, roundedBorder = true }) {
  return (
    <Container size={size} roundedBorder={roundedBorder}>
      <Icon icon="sad-cry" size="5x" color="white" />
      <p>Poster not Found</p>
    </Container>
  );
};

export default MoviePosterPlaceholder;
