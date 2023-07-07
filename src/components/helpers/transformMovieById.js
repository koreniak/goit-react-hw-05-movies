export const transformMovieById = ({ title, name, id, vote_average, overview, genres, release_date, poster_path }) =>
({
  title: title ? title : name,
  id,
  userScore: `${Math.round(vote_average * 10)}%`,
  overview,
  genres: genres.map(genre => genre.name).join(" "),
  release_date: new Date(release_date).getFullYear(),
  poster: `http://image.tmdb.org/t/p/w185${poster_path}`
});