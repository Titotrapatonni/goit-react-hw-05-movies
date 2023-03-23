import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieCard } from 'services';
import {
  BackLink,
  DetailsLink,
  Image,
  List,
  Title,
  Wrapper,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieCard, setMovieCard] = useState({});
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieCard(movieId).then(data => setMovieCard(data));
  }, [movieId]);

  return (
    <Wrapper>
      <BackLink to={backLinkHref.current}>Back to collection</BackLink>
      {movieCard.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`}
          alt="movie poster"
          width="400"
        />
      )}
      <h2>{movieCard.title}</h2>
      <p>User Score: {movieCard.vote_average}</p>
      <Title>Overview:</Title>
      <p>{movieCard.overview}</p>
      <Title>Genres: </Title>
      {movieCard.genres && (
        <p>{movieCard.genres.map(genre => genre.name).join(', ')}</p>
      )}
      <Title>Additional information</Title>
      <List>
        <li>
          <DetailsLink to="cast">Cast</DetailsLink>
        </li>
        <li>
          <DetailsLink to="reviews">Reviews</DetailsLink>
        </li>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </List>
    </Wrapper>
  );
};

export default MovieDetails;
