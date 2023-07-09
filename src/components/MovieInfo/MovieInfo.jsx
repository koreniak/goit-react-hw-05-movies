import PropTypes from 'prop-types';
import { MovieField, Info, MovieTitle, Text, SubTitle } from './MovieInfo.styled';

const MovieInfo = ({ movie: { title, userScore, overview, genres, releaseDate, poster } }) => (
  <MovieField>
    <img src={poster} alt={title} width="320"/>
    <Info>
      <MovieTitle>{`${title} (${releaseDate})`}</MovieTitle>
      <Text>{`User Score: ${userScore}`}</Text>
      <SubTitle>Overview</SubTitle>
      <Text>{overview}</Text>
      <SubTitle>Genres</SubTitle>
      <Text>{genres}</Text>
    </Info>
  </MovieField>
);

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    userScore: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  })
};

export default MovieInfo;