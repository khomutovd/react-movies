import React from 'react'

const API_KEY = process.env.REACT_APP_API_KEY;

class Search extends React.Component {
	state = {
		search: '',
		type: '',
	}

	handleChange = event => {
		this.setState(() => ({ [event.target.name]: event.target.value }),
			() => this.searchMovies())
	}

	handleSubmit = async event => {
		event.preventDefault()
		if (event.key === 'Enter' || event.target.name === 'action') {
			this.searchMovies()
		}
	}

	async searchMovies() {
		let prefix = '';
		if (this.state.type !== '') {
			prefix = '&е&type=';
		}
		try {
			const res = await fetch(
				`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.search}${prefix}${this.state.type}`
			)
			const data = await res.json()
			this.props.onUpdateMovies(data.Search, false)
		} catch (err) {
			this.props.onUpdateErr(false, err)
			console.log('Error!!!', err)
		}
	}

	render() {
		return (
			<div className='search-form'>
				<form action='#'>
					<div className='file-field input-field'>
						<div className='file-path-wrapper'>
							<input
								className='validate'
								type='search'
								name='search'
								value={this.state.search}
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
							/>
						</div>
						<button
							className='btn waves-effect waves-light'
							type='submit'
							name='action'
							onClick={this.handleSubmit}
						>
							Find
						</button>
						<div className='radio-buttons'>
							<label>
								<input
									name='type'
									type='radio'
									value=''
									onChange={this.handleChange}
									checked={this.state.type === ''}
								/>
								<span>All</span>
							</label>
							<label>
								<input
									name='type'
									type='radio'
									value='movie'
									onChange={this.handleChange}
									checked={this.state.type === 'movie'}
								/>
								<span>Movies only</span>
							</label>
							<label>
								<input
									name='type'
									type='radio'
									value='series'
									onChange={this.handleChange}
									checked={this.state.type === 'series'}
								/>
								<span>Series only</span>
							</label>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export {Search}
