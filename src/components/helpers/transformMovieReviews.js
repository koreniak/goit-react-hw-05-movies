export const transformMovieRewiews = ({ results }) => {
  return results.map(({ author, content }) =>
  ({
    author,
    content
  })
  );
};