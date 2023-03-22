import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.currentTarget.query.value.trim();
    const nextParams = query !== '' ? { query } : {};

    setSearchParams(nextParams);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
