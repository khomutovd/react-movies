function Movie(props) {
  const {poster, title, year} = props;
  return (
    
    <div className='movie card'>
      <div className='card-image'>
        {
          poster === 'N/A' ? (
            <h4>Sorry, img not available</h4>
          ) : (
            <img src={poster} />
          )
        }
      </div>
      <div className='card-content'>
        <span className='card-title'>
          {title} {year}
        </span>
      </div>
    </div>
  )
}

export { Movie }
