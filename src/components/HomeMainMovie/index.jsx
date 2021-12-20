import React from 'react';

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

const HomeMainMovie = function ({ mainMovie }) {
  const {
    poster_path: posterImage,
    vote_average: rate,
    release_date: releaseDate,
    title,
    overview,
  } = mainMovie;

  const posterImagePath = `${MOVIE_DB_IMAGE_URL.large}${posterImage}`;

  return (
    <Container>
      <PosterContainer>
        <Poster src={posterImagePath} />
      </PosterContainer>
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