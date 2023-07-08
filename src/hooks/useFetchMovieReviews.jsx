import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getMovieReviews } from "service/movies-service";

export const useFetchMovieReviews = () => {
  const [reviews, setReviews] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data)
      } catch (error) {
        setError(error.status_message);
      } finally {
        setIsLoading(false);
      };
    }
    fetchData();
  }, [movieId]);
  return { reviews, error, isLoading };
};