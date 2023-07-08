export const transformMovieCast = ({ cast }) => {
  return cast.map(({ character, credit_id, name, profile_path }) =>
  ({
    character,
    credit_id,
    name,
    photo: `http://image.tmdb.org/t/p/w45${profile_path}`
  })
  );
};