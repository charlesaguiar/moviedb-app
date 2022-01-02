import React from 'react';

import Icon from 'components/Icon';

import {
  HeaderContainer,
  HeaderTitle,
  HeaderColoredTitle,
  HeaderSubTitle,
} from '../styles';

const AppName = function () {
  return (
    <HeaderContainer>
      <a href="/">
        <HeaderTitle>
          React Movie
          <HeaderColoredTitle>D</HeaderColoredTitle>
          ata
          <HeaderColoredTitle>B</HeaderColoredTitle>
          ase
        </HeaderTitle>
      </a>
      <HeaderSubTitle>
        <Icon icon="bolt" color="primaryActive" />
        <span style={{ marginLeft: 8 }}>Powered by</span>
        {' '}
        <a target="_blank" rel="noopener noreferrer" href="https://www.themoviedb.org/">themoviedb.org</a>
      </HeaderSubTitle>
    </HeaderContainer>
  );
};

export default AppName;
