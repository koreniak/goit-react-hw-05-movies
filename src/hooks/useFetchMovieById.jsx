import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getMovieDetails } from "service/movies-service";

export const useFetchMovieById = () => {
  const [movie, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovies(data)
      } catch (error) {
        setError(error.status_message);
      } finally {
        setIsLoading(false);
      };
    }
    fetchData();
  }, [movieId]);
  return { movie, error, isLoading };
};