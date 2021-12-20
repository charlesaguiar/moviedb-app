import React from 'react';
import moment from 'moment';

import Icon from 'components/Icon';

import { Container } from './styles';

const MovieRelaseDate = function ({ releaseDate }) {
  return (
    <Container>
      <Icon icon="calendar" size="lg" />
      <span>
        <strong>Released at: </strong>
        {moment(releaseDate).format('DD/MM/YYYY')}
      </span>
    </Container>
  );
};

export default MovieRelaseDate;
