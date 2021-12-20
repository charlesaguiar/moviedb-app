import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { MOVIE_DB_IMAGE_URL } from 'utils/constants';

import MovieRating from 'components/MovieRating';

import {
  Container,
  MovieMainPicture,
  MovieInformation,
  MovieTitle,
  MovieReleaseDate,
} from './styles';

const Movie = function ({ movie }) {
  const {
    id,
    poster_path: posterImage,
    release_date: releaseDate,
    vote_average: rate,
    title,
  } = movie;

  const posterImagePath = `${MOVIE_DB_IMAGE_URL.medium}${posterImage}`;

  return (
    <Container>
      <Link to={`/movie/${id}`}>
        <MovieMainPicture src={posterImagePath} />
      </Link>
      <MovieInformation>
        <MovieTitle>{title}</MovieTitle>
        <MovieRating rate={rate} />
        <MovieReleaseDate>{moment(releaseDate).format('MMM DD, YYYY')}</MovieReleaseDate>
      </MovieInformation>
    </Container>
  );
};

export default Movie;
