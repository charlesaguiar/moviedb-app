import React from 'react';

import { MoviesContext } from 'contexts/MoviesContext';

import HomeTemplate from 'templates/Home';

import { MOVIES_CONTEXT_INITIAL_VALUE } from 'utils/constants';

const Home = function () {
  return (
    <MoviesContext initialValue={MOVIES_CONTEXT_INITIAL_VALUE}>
      <HomeTemplate />
    </MoviesContext>
  );
};

export default Home;
