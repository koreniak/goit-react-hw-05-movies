export const transformMovieRewiews = ({ results }) => {
  return results.map(({ author, content, id }) =>
  ({
    author,
    content,
    id
  })
  );
};