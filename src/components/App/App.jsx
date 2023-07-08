import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "routes";
import Layout from "components/Layout";
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MovieCast = lazy(() => import('components/MovieCast'));
const MovieReviews = lazy(() => import('components/MovieReviews'));


export const App = () => {

  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />} >
          <Route path={routes.CAST} element={<MovieCast/>} />
          <Route path={routes.REVIEWS} element={<MovieReviews/>} />
        </Route>
      </Route>
    </Routes>
  )
};