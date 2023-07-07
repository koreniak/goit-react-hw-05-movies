export const transformMovies = ({ results }) => {
  return results.map(({ title, name, id }) =>
  ({
    title: title ? title : name,
    id: id
  })
  );
};