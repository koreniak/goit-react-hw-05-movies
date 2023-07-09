import { useFetchTrandingMovies } from "hooks/useFetchTrandingMovies";
import MoviesList from "components/MoviesList/MoviesList";

const Home = () => {
	const { movies, error, isLoading } = useFetchTrandingMovies();
  return (
    <section>
      {error && <p>{error}</p>}
      {isLoading && <p>Is Loading...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
			
    </section>
  );
};

export default Home;