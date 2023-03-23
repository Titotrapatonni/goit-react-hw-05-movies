import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services';
import { Item, List, MovieLink } from './TrendingMoviesList.styled';

export const TrendingMoviesList = () => {
  const location = useLocation();

  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(movies => setTrendingMovies(movies));
  }, []);
  return (
    <main>
      <List>
        {trendingMovies.map(movie => (
          <Item key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </MovieLink>
          </Item>
        ))}
      </List>
    </main>
  );
};
