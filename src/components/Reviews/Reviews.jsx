import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services';
import { Wrapper } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId).then(results => setReviews(results));
  }, [movieId]);

  return (
    <Wrapper>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default Reviews;
