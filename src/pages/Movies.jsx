import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';

const Movies = () => {
  return (
    <div>
      <SearchForm />
      <SearchMoviesList />
    </div>
  );
};

export default Movies;
