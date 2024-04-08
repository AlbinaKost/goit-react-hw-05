import { useState, useEffect } from 'react';
import { requestMovieReviews } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams();

  const [MovieReviewsData, setMovieReviewsData] = useState(null);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const data = await requestMovieReviews(movieId);

        setMovieReviewsData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {MovieReviewsData && (
        <ul className={css.list}>
          {MovieReviewsData.results.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MovieReviews;