import { Suspense, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { useFetchMovieById } from "hooks/useFetchMovieById";
import { GoBackButton, MovieContainer, AdditionalList, AdditionalLink } from "components/MovieInfo/MovieInfo.styled";

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "")

  const { movie, error, isLoading } = useFetchMovieById();

  return (
    <MovieContainer>
      <GoBackButton to={backLinkLocationRef.current}>Go Back</GoBackButton>
      <div>
        {error && <p>{error}</p>}
        {isLoading && <p>Is Loading...</p>}
        <MovieInfo movie={movie} />
      </div>
      <AdditionalList>
        <li><AdditionalLink to="cast">Cast</AdditionalLink></li>
        <li><AdditionalLink to="reviews">Reviews</AdditionalLink></li>
      </AdditionalList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieContainer>
  );
};

export default MovieDetails;