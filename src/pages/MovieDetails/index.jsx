import React from 'react';
import { useParams } from 'react-router-dom';

import MovieDetailsTemplate from 'templates/MovieDetails';

const MovieDetails = function () {
  const { movieId } = useParams();

  return <MovieDetailsTemplate movieId={movieId} />;
};

export default MovieDetails;
