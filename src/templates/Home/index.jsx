import React, { useEffect } from 'react';

import useFetch from 'hooks/useFetch';
import MoviesService from 'services/MoviesService';

import { useMoviesContext } from 'contexts/MoviesContext';

import HomeMainMovie from 'components/HomeMainMovie';
import PopularMovies from 'components/PopularMovies';
import SearchInput from 'components/SearchInput';
import Loading from 'components/Loading';

import { FullLoadingContainer } from 'design/shared.styles';
import { Container, Divider } from './styles';

const HomeTemplate = function () {
  const [moviesContext, setMoviesContext] = useMoviesContext();

  const [{ data, loading }] = useFetch(
    () => MoviesService.getMovies({
      page: moviesContext.pagination.page,
      query: moviesContext.searchTerm,
    }),
    [moviesContext.pagination.page, moviesContext.searchTerm],
  );

  useEffect(() => {
    const movies = data?.results || [];

    setMoviesContext({
      movies,
      mainMovie: moviesContext.mainMovie || movies[0],
      pagination: {
        totalResults: data?.total_results || 0,
        totalPages: data?.total_pages || 1,
        page: data?.page || 1,
      },
    });
  }, [data]);

  if (loading || !data) {
    return (
      <FullLoadingContainer>
        <Loading size={200} />
      </FullLoadingContainer>
    );
  }

  if (!moviesContext.movies.length) {
    return <p>Couldnt find any movies to display.</p>;
  }

  console.log({ m: moviesContext.movies });

  return (
    <Container>
      <HomeMainMovie />
      <Divider />
      <SearchInput />
      <PopularMovies />
    </Container>
  );
};

export default HomeTemplate;
