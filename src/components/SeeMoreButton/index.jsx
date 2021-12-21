import React from 'react';

import Icon from 'components/Icon';

import { Button, ButtonText } from './styles';

const SeeMoreButton = function ({ onSeeMore }) {
  return (
    <Button type="button" onClick={onSeeMore}>
      <Icon icon="plus" size="lg" color="white" />
      <ButtonText>See more</ButtonText>
    </Button>
  );
};

export default SeeMoreButton;
