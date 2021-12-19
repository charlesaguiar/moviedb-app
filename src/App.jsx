import React from 'react';

import useFetch from 'hooks/useFetch';

import MoviesService from 'services/MoviesService';

import Icon from 'components/atoms/Icon';

const App = function () {
  const [{ data, loading }] = useFetch(() => MoviesService.getMovies());

  if (loading) {
    return <p>Carregando...</p>;
  }

  console.log({ data });

  return (
    <div>
      <p>Teste</p>
      <Icon />
    </div>
  );
};

export default App;
