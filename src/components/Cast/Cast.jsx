import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services';
import { Wrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data));
  }, [movieId]);
  return (
    <Wrapper>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt="actor"
                width="150"
              />
            )}
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Cast;
