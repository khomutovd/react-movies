import React from 'react'
import { Preloader } from '../components/Preloader'
import { Movies } from '../components/Movies'
import { Search } from '../components/Search'

class Main extends React.Component {
	state = {
		movies: [],
		isLoading: false,
		error: null,
	};

	updateMovies = (newMoviesData, newIsLoading) => {
		this.setState({ movies: newMoviesData, isLoading: newIsLoading });
	};

	updateErr = (newIsLoading, newErrData) => {
		this.setState({ isLoading: newIsLoading, error: newErrData });
	};

	render() {
		const { movies } = this.state;
		return (
			<main className='container content'>
				<>
					<Search
						movies={movies}
						onUpdateMovies={this.updateMovies}
						onUpdateErr={this.updateErr}
					/>
					<Movies movies={movies} />
				</>
			</main>
		);
	}
}

export { Main }
