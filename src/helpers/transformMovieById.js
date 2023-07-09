import notFound from "images/71367678-website-error-404.-page-not-found..webp";
export const transformMovieById = ({ title, name, id, vote_average, overview, genres, release_date, poster_path }) =>
({
  title: title ? title : name,
  id,
  userScore: `${Math.round(vote_average * 10)}%`,
  overview,
  genres: genres.map(genre => genre.name).join(" "),
  releaseDate: new Date(release_date).getFullYear(),
  poster: poster_path ? `https://image.tmdb.org/t/p/w185${poster_path}` : notFound
});