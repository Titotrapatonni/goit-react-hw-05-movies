import {
  Item,
  List,
  MovieLink,
} from 'components/TrendingMoviesList/TrendingMoviesList.styled';
import { Title } from 'pages/MovieDetails.styled';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services';

export const SearchMoviesList = () => {
  const [searchList, setSearchList] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) {
      return;
    }
    getSearchMovie(query).then(movies => setSearchList(movies));
  }, [query]);
  return (
    <List>
      {searchList.length === 0 ? (
        <Title>Try to find your favorite movie</Title>
      ) : (
        searchList.map(movie => (
          <Item key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </MovieLink>
          </Item>
        ))
      )}
    </List>
  );
};
