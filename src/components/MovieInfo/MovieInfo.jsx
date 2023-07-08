import PropTypes from 'prop-types';
import { MovieField, Info, MovieTitle, Text, SubTitle } from './MovieInfo.styled';

const MovieInfo = ({ movie: { title, userScore, overview, genres, releaseDate, poster } }) => (
  <MovieField>
    <img src={poster} alt={title} />
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
  movie: PropTypes.object.isRequired
};

export default MovieInfo;