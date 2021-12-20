import React, { useState } from 'react';

import useFetch from 'hooks/useFetch';
import MoviesService from 'services/MoviesService';

import HomeMainMovie from 'components/HomeMainMovie';
import LatestMovies from 'components/LatestMovies';
import SearchInput from 'components/SearchInput';

import { Container, Divider } from './styles';

const Home = function () {
  const [page, setPage] = useState(1);
  const [{ data, loading }] = useFetch(() => MoviesService.getMovies({ page }), [page]);

  const movies = data?.results || [];
  const [mainMovie] = movies;

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  if (!movies.length) {
    return <p>Couldn&#39t find any movies to display.</p>;
  }

  return (
    <Container>
      <HomeMainMovie mainMovie={mainMovie} />
      <Divider />
      <SearchInput />
      <LatestMovies movies={movies} onSeeMore={() => setPage((prev) => prev + 1)} />
    </Container>
  );
};

export default Home;
