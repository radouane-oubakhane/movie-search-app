import { useEffect, useState } from "react";
import MovieGrid from "./MovieGrid";


interface Props {
    path: string;
}

export interface MovieQuery {
    sortBy: string;
    primaryReleaseDateGte: string;
    primaryReleaseDateLte: string;
}




const MovieContainer = ({ path }: Props) => {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery); 
  
  useEffect(() => {

    if (path === 'popular') {
        setMovieQuery({sortBy: 'popularity.desc'} as MovieQuery)
    }
    if (path === 'top-rated') {
        setMovieQuery({sortBy: 'vote_count.desc'} as MovieQuery)
    }    
    if (path === 'upcoming') {
      setMovieQuery({primaryReleaseDateGte: new Date().toISOString().split('T')[0]} as MovieQuery)
    }
    if (path === 'now-playing') {
        setMovieQuery({primaryReleaseDateLte: new Date().toISOString().split('T')[0]} as MovieQuery)
    }
    
    }, [path])
   

  return (
    <MovieGrid movieQuery={movieQuery} />
  )
}

export default MovieContainer

