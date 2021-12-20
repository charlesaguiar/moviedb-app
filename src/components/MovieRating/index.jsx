import React from 'react';

import Icon from 'components/Icon';

import { Container } from './styles';

const MovieRating = function ({ rate }) {
  const iconMapper = () => {
    if (rate < 6) {
      return { icon: 'frown', color: 'red' };
    }

    if (rate >= 6 && rate < 7) {
      return { icon: 'meh', color: 'yellow' };
    }

    return { icon: 'smile', color: 'green' };
  };

  const iconProps = iconMapper();

  return (
    <Container>
      <Icon icon={iconProps.icon} color={iconProps.color} size="lg" />
      <span>
        <strong>Rate: </strong>
        {`${rate}/10.0`}
      </span>
    </Container>
  );
};

export default MovieRating;
