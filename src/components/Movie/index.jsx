import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { MOVIE_DB_IMAGE_URL } from 'utils/constants';

import MovieRating from 'components/MovieRating';
import MoviePosterPlaceholder from 'components/MoviePosterPlaceholder';

import {
  Container,
  MovieMainPicture,
  MovieInformation,
  MovieTitle,
  MovieReleaseDate,
} from './styles';

const Movie = function ({ movie, size = 'medium' }) {
  const {
    id,
    poster_path: posterImage,
    release_date: releaseDate,
    vote_average: rate,
    title,
  } = movie;

  const posterImagePath = `${MOVIE_DB_IMAGE_URL[size]}${posterImage}`;

  return (
    <Container>
      <Link to={`/movie/${id}`}>
        {posterImage ? (
          <MovieMainPicture src={posterImagePath} />
        ) : (
          <MoviePosterPlaceholder size={{ width: '300px', height: '450px' }} />
        )}
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
