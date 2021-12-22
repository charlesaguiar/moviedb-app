import React from 'react';

import useFetch from 'hooks/useFetch';
import MoviesService from 'services/MoviesService';

import { MOVIE_DB_IMAGE_URL } from 'utils/constants';
import Loading from 'components/Loading';
import MoviePosterPlaceholder from 'components/MoviePosterPlaceholder';

import { FullLoadingContainer } from 'design/shared.styles';
import {
  Container,
  Gallery,
  CastProfilePictureContainer,
  CastProfilePicture,
  CastInfoContainer,
  Title,
} from './styles';

const MovieActors = function ({ movieId }) {
  const [{ data: actors, loading }] = useFetch(
    () => MoviesService.getMovieActors(movieId, 7),
    [movieId],
  );

  if (loading || !actors) {
    return (
      <FullLoadingContainer>
        <Loading size={200} />
      </FullLoadingContainer>
    );
  }

  return (
    <Container>
      <Title>Main cast</Title>
      <Gallery>
        {actors.map((actor) => (
          <CastProfilePictureContainer key={actor.id}>
            <ActorItem actor={actor} />
          </CastProfilePictureContainer>
        ))}
      </Gallery>
    </Container>
  );
};

const ActorItem = function ({ actor }) {
  return (
    <>
      {actor.profile_path ? (
        <CastProfilePicture src={`${MOVIE_DB_IMAGE_URL.medium}${actor.profile_path}`} />
      ) : (<MoviePosterPlaceholder roundedBorder={false} />)}
      <CastInfoContainer>
        <span>{actor.original_name}</span>
        <span className="italic">{actor.character}</span>
      </CastInfoContainer>
    </>

  );
};

export default MovieActors;
