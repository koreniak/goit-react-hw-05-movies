import { useFetchMovieCast } from "hooks/useFetchMovieCast";
import { MovieAddContainer, MovieCastItem } from "./MovieCast.styled";
import { Text } from "components/MovieInfo/MovieInfo.styled";

const MovieCast = () => {
  const { cast, error, isLoading } = useFetchMovieCast();

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Is Loading...</p>}
      {!isLoading && cast.length > 0 ? <MovieAddContainer>
        {
          cast.map(({ character, credit_id, name, photo }) => <MovieCastItem key={credit_id}>
            <img src={photo} alt={name} width="240"/>
            <Text>{name}</Text>
            <Text>{`Character: ${character}`}</Text>
          </MovieCastItem>)
        }
      </MovieAddContainer> : <p>We don't know about cast for this movie</p>}
    </div>
  );
};

export default MovieCast;