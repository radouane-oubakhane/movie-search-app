import { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react"
import MovieGrid from "./MovieGrid";
import MovieSortFilterSidebar from "./MovieSortFilterSidebar";
import ContainerHeading from "./ContainerHeading";



interface Props {
    path: string;
}

export interface MovieQuery {
    sortBy: string;
    primaryReleaseDateGte?: string;
    primaryReleaseDateLte?: string;
    releaseDateLte?: string;
    withGenres?: string;
    withOriginalLanguage?: string;
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

    

    const heading = [
      {title: 'Popular', route: 'popular'}, 
      {title: 'Top Rated', route: 'top-rated'},
      {title: 'Upcoming', route: 'upcoming'}, 
      {title: 'Now Playing', route: 'now-playing'}
    ];

    const title = heading.find((item) => item.route === path)?.title || '';



  return (
    <Grid templateAreas={{
      base: `"heading" "aside" "content"`,
      lg: `"heading heading" "aside content"`
      }}
    templateColumns={{
        base: '1fr',
        lg: '300px 1fr'
      }}
    >
      <GridItem area="heading" paddingX={2}>
        <ContainerHeading category="Movies" title={title} />
      </GridItem>
      <GridItem area="aside" paddingX={2}>
        <MovieSortFilterSidebar 
        onSortChange={
          (sortingOption: string) => setMovieQuery({...movieQuery, sortBy: sortingOption} as MovieQuery)
        }
        onDateFromChange={
          (date: string) => setMovieQuery({...movieQuery, primaryReleaseDateGte: date} as MovieQuery)
        }
        onDateToChange={
          (date: string) => setMovieQuery({...movieQuery, primaryReleaseDateLte: date} as MovieQuery)
        }
        onGenreChange={
          (genreId: string) => {
            const genres = movieQuery.withGenres?.split(',');
            if (!genres?.includes(genreId)) {
              setMovieQuery({...movieQuery, withGenres: `${movieQuery.withGenres ? movieQuery.withGenres + ',' : ''}${genreId}`} as MovieQuery)
            }
            else {
              const newGenres = genres.filter((genre) => genre !== genreId);
              setMovieQuery({...movieQuery, withGenres: newGenres.join(',')} as MovieQuery)
            }
          }
        }
        selectedGenreIds={
          movieQuery.withGenres?.split(',') || []
        }
        onLanguageChange={
          (languageOption: string) => setMovieQuery({...movieQuery, withOriginalLanguage: languageOption} as MovieQuery)
        }
        />
      </GridItem>
      <GridItem area="content">
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  )
}

export default MovieContainer

