import { ToastContainer } from "react-toastify";
import MoviesContainer from "components/MoviesContainer";
import { useFetchTrandingMovies } from "hooks/useFetchTrandingMovies";

const Home = () => {
	const { movies, error, isLoading } = useFetchTrandingMovies();
	return (
		<section>
			<MoviesContainer movies={movies} error={error} isLoading={isLoading} />
			<ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
		</section>
	);
};

export default Home;