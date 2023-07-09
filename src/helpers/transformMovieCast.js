import notFound from "images/71367678-website-error-404.-page-not-found..webp";
export const transformMovieCast = ({ cast }) => {
  return cast.map(({ character, credit_id, name, profile_path }) =>
  ({
    character,
    credit_id,
    name,
    photo: profile_path ? `https://image.tmdb.org/t/p/w45${profile_path}` : notFound
  })
  );
};