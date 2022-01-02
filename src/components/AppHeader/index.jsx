import React from 'react';

import AppName from './AppName';
import AppNavItems from './AppNavItems';

import {
  Container,
} from './styles';

const AppHeader = function () {
  return (
    <Container>
      <AppName />
      <AppNavItems />
    </Container>
  );
};

export default AppHeader;
