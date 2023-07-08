import PropTypes from 'prop-types';
import MoviesList from "components/MoviesList";

const MoviesContainer = ({ movies, error, isLoading }) => (
  <div>
    {error && <p>{error}</p>}
    {isLoading && <p>Is Loading...</p>}
    {movies.length > 0 && <MoviesList movies={movies} />}
  </div>
);

MoviesContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

export default MoviesContainer;