import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieCard } from 'services';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieCard, setMovieCard] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieCard(movieId).then(data => setMovieCard(data));
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref}>Back to collection</Link>
      {movieCard.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`}
          alt="movie poster"
          width="240"
        />
      )}
      <h2>{movieCard.title}</h2>
      <p>User Score: {movieCard.vote_average}</p>
      <h3>Overview:</h3>
      <p>{movieCard.overview}</p>
      <h3>Genres: </h3>
      {movieCard.genres && (
        <p>{movieCard.genres.map(genre => genre.name).join(', ')}</p>
      )}
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
        <Outlet />
      </ul>
    </div>
  );
};

export default MovieDetails;
