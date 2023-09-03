import { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react"
import TVShowGrid from "./TVShowGrid";
import SortFilterSidebar from "./SortFilterSidebar";
import ContainerHeading from "./ContainerHeading";

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
   


  const heading = [
      {title: 'Popular', route: 'popular'}, 
      {title: 'Top Rated', route: 'top-rated'}, 
      {title: 'Currently Airing', route: 'on-the-air'}, 
      {title: 'Airing Today', route: 'airing-today'}
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
        <ContainerHeading category="TV Shows" title={title} />
      </GridItem>
      <GridItem area="aside" paddingX={2}>
        <SortFilterSidebar />
      </GridItem>
      <GridItem area="content">
        <TVShowGrid tvShowQuery={tvShowQuery} />
      </GridItem>
    </Grid>
  )
}

export default MovieContainer

