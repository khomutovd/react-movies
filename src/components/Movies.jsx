import React from 'react'
import { Movie } from './Movie'

function Movies(props) {
	const { movies = [''] } = props;
	return (
		<div className='movies'>
			{movies.length ? (movies.map(movie => (
				<Movie
					key={movie.imdbID}
					poster={movie.Poster}
					title={movie.Title}
					year={movie.Year}
				/>
			))) : (
        <h4>Nothing was found</h4>
      )}
		</div>
	)
}

export { Movies }
