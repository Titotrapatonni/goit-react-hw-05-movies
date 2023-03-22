import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
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
    <ul>
      {searchList.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
