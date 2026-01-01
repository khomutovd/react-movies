import React, {useState} from 'react'
import { Preloader } from '../components/Preloader'
import { Movies } from '../components/Movies'
import { Search } from '../components/Search'

function Main() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const updateMovies = (newMoviesData, newIsLoading) => {
		setMovies(newMoviesData);
		setIsLoading(newIsLoading);
	};
	
	const updateErr = (newIsLoading, newErrData) => {
		setError(newErrData);
		setIsLoading(newIsLoading);
	};

	return (
		<main className='container content'>
			<>
				<Search
					movies={movies}
					onUpdateMovies={updateMovies}
					onUpdateErr={updateErr}
				/>
				<Movies movies={movies} />
			</>
		</main>
	)
}

export { Main }
