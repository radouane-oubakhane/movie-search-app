import { useEffect, useState } from "react";
import TVShowGrid from "./TVShowGrid";

interface Props {
    path: string;
  }

export interface TVShowQuery {
    sortBy: string;
    fistAirDateGte: string;
    firstAirDateLte: string;
    screenedTheatrically: boolean;
  }




const MovieContainer = ({ path }: Props) => {
  const [tvShowQuery, setTVShowQuery] = useState<TVShowQuery>({} as TVShowQuery); 
  
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const nextWeek = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    if (path === 'popular') {
      setTVShowQuery({sortBy: 'popularity.desc'} as TVShowQuery)
    }
    if (path === 'top-rated') {
      setTVShowQuery({sortBy: 'vote_count.desc'} as TVShowQuery)
    }    
    if (path === 'on-the-air') {
      setTVShowQuery({fistAirDateGte: today, firstAirDateLte: nextWeek, sortBy: 'popularity.desc'} as TVShowQuery)
    }
    if (path === 'airing-today') {
      setTVShowQuery({fistAirDateGte: today, firstAirDateLte: today, sortBy: 'popularity.desc'} as TVShowQuery)
    }
    
    }, [path])
   

  return (
    <TVShowGrid tvShowQuery={tvShowQuery} />
  )
}

export default MovieContainer

