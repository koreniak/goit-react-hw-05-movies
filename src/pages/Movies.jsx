import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetchMoviesByQuery } from "hooks/useFetchMoviesByQuery";
import Searchbar from "components/Searchbar/Searchbar";
import MoviesContainer from 'components/MoviesContainer';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsQuery = searchParams.get('query') ?? "";

  const updateQueryString = (query) => {
    if (query === '') {
      return setSearchParams({});
    };
    setSearchParams({ query: query });
  };

  const { movies, error, isLoading, setMovies, setError } = useFetchMoviesByQuery(paramsQuery)

  const onSubmit = ({ query }) => {
    if (query.trim() === "") {
      return toast.error(`Enter the query to search for`);
    }
    updateQueryString(query)
    setMovies([]);
    setError(null);
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} inputValue={paramsQuery} />
      <MoviesContainer movies={movies} error={error} isLoading={isLoading} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
};

export default Movies;