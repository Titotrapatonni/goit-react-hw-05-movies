import { useSearchParams } from 'react-router-dom';
import { Form, Input, SearchBtn } from './SearchForm.styled';

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
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="query" />
      <SearchBtn type="submit">Search</SearchBtn>
    </Form>
  );
};
