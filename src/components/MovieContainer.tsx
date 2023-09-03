import { useEffect, useState } from "react";
import MovieGrid from "./MovieGrid";


interface Props {
    path: string;
}

export interface MovieQuery {
    sortBy: string;
    primaryReleaseDateGte?: string;
    primaryReleaseDateLte?: string;
    releaseDateLte?: string;
}




const MovieContainer = ({ path }: Props) => {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery); 
  
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];

    if (path === 'popular') {
        setMovieQuery({sortBy: 'popularity.desc'} as MovieQuery)
    }
    if (path === 'top-rated') {
        setMovieQuery({sortBy: 'vote_count.desc'} as MovieQuery)
    }    
    if (path === 'upcoming') {
      setMovieQuery({primaryReleaseDateGte: today, sortBy: 'popularity.desc'} as MovieQuery)
    }
    if (path === 'now-playing') {
        setMovieQuery({primaryReleaseDateLte: today, sortBy: 'primary_release_date.desc'} as MovieQuery)
    }
    
    }, [path])
   

  return (
    <MovieGrid movieQuery={movieQuery} />
  )
}

export default MovieContainer

