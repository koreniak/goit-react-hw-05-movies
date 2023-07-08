import { useFetchMovieReviews } from "hooks/useFetchMovieReviews";
import { ReviewsText, ReviewsTitle } from "./MovieReviews.styled";
import { MovieAddContainer } from "components/MovieCast/MovieCast.styled";

const MovieReviews = () => {
  const { reviews, error, isLoading } = useFetchMovieReviews();

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Is Loading...</p>}
      {reviews.length > 0 ? <MovieAddContainer>
        {
          reviews.map(({ author, content, id }) => <li key={id}>
            <ReviewsTitle>{`Author: ${author}`}</ReviewsTitle>
            <ReviewsText>{content}</ReviewsText>
          </li>)
        }
      </MovieAddContainer> : <p>We don't have any reviews for this movie</p>}
    </div>
  );
};

export default MovieReviews;