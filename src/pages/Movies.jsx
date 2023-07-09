import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetchMoviesByQuery } from "hooks/useFetchMoviesByQuery";
import Searchbar from "components/Searchbar/Searchbar";
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsQuery = searchParams.get('query') ?? "";

  const { movies, error, isLoading } = useFetchMoviesByQuery(paramsQuery)

  const onSubmit = ({ query }) => {
    if (query.trim() === "") {
      return toast.error(`Enter the query to search for`);
    }
    setSearchParams(query.trim()==="" ? {}: {query})
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} inputValue={paramsQuery} />
      {error && <p>{error}</p>}
      {isLoading && <p>Is Loading...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;