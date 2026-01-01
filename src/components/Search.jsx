import React, {useState, useEffect} from 'react'

const API_KEY = process.env.REACT_APP_API_KEY;

function Search({onUpdateMovies, onUpdateErr}) {
	const [search, setSearch] = useState('');
	const [type, setType] = useState('');

	const handleChange = event => {
		const { name, value } = event.target;

		if (name === 'search') {
			setSearch(value);
		} else if (name === 'type') {
			setType(value);
		}

	}

	const handleSubmit = async event => {
		event.preventDefault()
		if (event.key === 'Enter' || event.target.name === 'action') {
			searchMovies();
		}
	}

	useEffect(() => {
		searchMovies();
	}, [type, search]);

	const searchMovies = async () => {
		let prefix = '';
		if (type !== '') {
			prefix = '&е&type=';
		}
		try {
			const res = await fetch(
				`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${prefix}${type}`
			)
			const data = await res.json()
			onUpdateMovies(data.Search, false)
		} catch (err) {
			onUpdateErr(false, err)
			console.log('Error!!!', err)
		}
	}

	return (
		<div className='search-form'>
			<form action='#'>
				<div className='file-field input-field'>
					<div className='file-path-wrapper'>
						<input
							className='validate'
							type='search'
							name='search'
							value={search}
							onChange={handleChange}
							onSubmit={handleSubmit}
						/>
					</div>
					<button
						className='btn waves-effect waves-light'
						type='submit'
						name='action'
						onClick={handleSubmit}
					>
						Find
					</button>
					<div className='radio-buttons'>
						<label>
							<input
								name='type'
								type='radio'
								value=''
								onChange={handleChange}
								checked={type === ''}
							/>
							<span>All</span>
						</label>
						<label>
							<input
								name='type'
								type='radio'
								value='movie'
								onChange={handleChange}
								checked={type === 'movie'}
							/>
							<span>Movies only</span>
						</label>
						<label>
							<input
								name='type'
								type='radio'
								value='series'
								onChange={handleChange}
								checked={type === 'series'}
							/>
							<span>Series only</span>
						</label>
					</div>
				</div>
			</form>
		</div>
	);
}

export {Search}
