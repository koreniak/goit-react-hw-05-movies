import { getMovieReviews } from "service/movies-service";
import { useState } from "react";

export const App = () => {
  const [query, setQuery] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await getMovieReviews(query)
  };

  return <>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
      <button type="submit">Click</button>
    </form>
  </>
};