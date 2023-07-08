import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getMovieCredits } from "service/movies-service";

export const useFetchMovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCredits(movieId);
        setCast(data)
      } catch (error) {
        setError(error.status_message);
      } finally {
        setIsLoading(false);
      };
    }
    fetchData();
  }, [movieId]);
  return { cast, error, isLoading };
};