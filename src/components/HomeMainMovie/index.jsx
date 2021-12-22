import React from 'react';
import { Link } from 'react-router-dom';
import { useMoviesContext } from 'contexts/MoviesContext';

import { MOVIE_DB_IMAGE_URL } from 'utils/constants';

import MovieRating from 'components/MovieRating';
import MovieRelaseDate from 'components/MovieRelaseDate';

import {
  Container,
  InfoContainer,
  PosterContainer,
  Poster,
  HighlightedContainer,
  HighlightedTitle,
  Title,
} from './styles';

const HomeMainMovie = function () {
  const [moviesContext] = useMoviesContext();

  const {
    poster_path: posterImage,
    vote_average: rate,
    release_date: releaseDate,
    title,
    overview,
    id,
  } = moviesContext.mainMovie;

  const posterImagePath = `${MOVIE_DB_IMAGE_URL.large}${posterImage}`;

  return (
    <Container>
      <Link to={`/movie/${id}`}>
        <PosterContainer>
          <Poster src={posterImagePath} />
        </PosterContainer>
      </Link>
      <HighlightedContainer>
        <HighlightedTitle>Highlight</HighlightedTitle>
        <Title>{title}</Title>
        <InfoContainer>
          <MovieRating rate={rate} />
          <MovieRelaseDate releaseDate={releaseDate} />
        </InfoContainer>
        <p>{overview}</p>
      </HighlightedContainer>
    </Container>
  );
};

export default HomeMainMovie;
