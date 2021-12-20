import React from 'react';

import CinemaPopcorn from 'assets/images/cinema-popcorn.png';

import Icon from 'components/Icon';

import {
  Container,
  Image,
  HeaderContainer,
  HeaderTitle,
  HeaderColoredTitle,
  HeaderSubTitle,
} from './styles';

const AppHeader = function () {
  return (
    <Container>
      <Image src={CinemaPopcorn} alt="logo" />
      <HeaderContainer>
        <HeaderTitle>
          React Movie
          <HeaderColoredTitle>D</HeaderColoredTitle>
          ata
          <HeaderColoredTitle>B</HeaderColoredTitle>
          ase
        </HeaderTitle>
        <HeaderSubTitle>
          <Icon icon="bolt" color="primaryActive" />
          <span style={{ marginLeft: 8 }}>Powered by</span>
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.themoviedb.org/">themoviedb.org</a>
        </HeaderSubTitle>
      </HeaderContainer>
    </Container>
  );
};

export default AppHeader;
