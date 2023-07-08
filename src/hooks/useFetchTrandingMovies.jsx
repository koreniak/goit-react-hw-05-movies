import { useState, useEffect } from "react";
import { getTrandingMovies } from "service/movies-service";

export const useFetchTrandingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const data = await getTrandingMovies();
        setMovies(data);
      } catch (error) {
        setError(error.status_message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])
  return { movies, error, isLoading };
};