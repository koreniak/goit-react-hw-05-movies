import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { routes } from "routes";
import { MoviesContainer, MovieItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesContainer>
      {movies && movies.map(({ title, id }) => (
        <MovieItem key={id}>
          <Link to={`${routes.MOVIES}/${id}`} state={{ from: location }}>{title}</Link>
        </MovieItem>
      ))}
    </MoviesContainer>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
};

export default MoviesList;