import React from 'react';
import moment from 'moment';

import { MOVIE_DB_IMAGE_URL } from 'utils/constants';
import { formatToHHmm, formatToUsCurrency } from 'utils/format';

import Icon from 'components/Icon';
import MovieRating from 'components/MovieRating';
import MoviePosterPlaceholder from 'components/MoviePosterPlaceholder';

import {
  Container,
  Poster,
  PosterContainer,
  InfoContainer,
  InfoFooterContainer,
  InfoFooterItem,
  TitleContainer,
  Title,
  Tagline,
  GenresContainer,
  Genre,
  BookmarkButton,
  SummaryContainer,
} from './styles';

const MovieHeader = function ({ movie }) {
  const {
    poster_path: posterImage,
    vote_average: rate,
    genres,
    tagline,
    runtime,
    budget,
    release_date: releaseDate,
    title,
    overview,
  } = movie;

  const posterImagePath = `${MOVIE_DB_IMAGE_URL.large}${posterImage}`;

  return (
    <Container>
      <PosterContainer>
        {posterImage ? (<Poster src={posterImagePath} />) : (
          <MoviePosterPlaceholder size={{ width: '300px', height: '450px' }} />
        )}
      </PosterContainer>
      <div>
        <InfoContainer>
          <TitleContainer>
            <Title>{title}</Title>
            <MovieRating rate={rate} />
          </TitleContainer>

          {tagline ? (
            <Tagline>
              <span>{tagline}</span>
            </Tagline>
          ) : null}

          <BookmarkButton type="button">
            <Icon icon="bookmark" size="lg" color="white" />
            <span>Add to my WatchList</span>
          </BookmarkButton>

          <SummaryContainer>
            <span>
              <strong>Overview: </strong>
              {overview}
            </span>
          </SummaryContainer>

          <p>Genres:</p>
          <GenresContainer>
            {genres?.map((g) => <Genre key={g.id}><span>{g.name}</span></Genre>)}
          </GenresContainer>
        </InfoContainer>

        <InfoFooterContainer>
          <InfoFooterItem>
            <Icon icon="calendar" color="white" size="lg" />
            <span>{`Released at: ${moment(releaseDate).format('DD/MM/YYYY')}`}</span>
          </InfoFooterItem>

          <InfoFooterItem>
            <Icon icon="clock" color="white" size="lg" />
            <span>{`Duration: ${formatToHHmm(runtime)}`}</span>
          </InfoFooterItem>

          <InfoFooterItem>
            <Icon icon="money-bill-wave" color="white" size="lg" />
            <span>{`Budget: ${formatToUsCurrency(budget)}`}</span>
          </InfoFooterItem>
        </InfoFooterContainer>
      </div>
    </Container>
  );
};

export default MovieHeader;
