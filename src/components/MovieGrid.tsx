import useMovies from "../hooks/useMovies"



const MovieGrid = () => {
    const { movies, isLoading, error } = useMovies()
    
    return (
        <>
            {error && <div>{error}</div>}
            <ul>
                {movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}
            </ul> 
        </>
    )
}

export default MovieGrid