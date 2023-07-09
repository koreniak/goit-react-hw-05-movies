import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { getSearchedMovies } from "service/movies-service";

export const useFetchMoviesByQuery = (query) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (!query) {
      return
    };
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getSearchedMovies(query);
        if (data.length === 0) {
          return toast.error(`Sorry, but nothing was found for your query: ${query}.`);
        }
        setMovies(data);
      } catch (error) {
        setError(error.status_message);
      } finally {
        setIsLoading(false);
      };
    }
    fetchData();
  }, [query]);
  return { movies, error, isLoading };
};