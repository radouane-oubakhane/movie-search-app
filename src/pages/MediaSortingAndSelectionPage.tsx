import { Grid, GridItem } from "@chakra-ui/react"
import SortFilterSidebar from "../components/SortFilterSidebar"
import { useLocation } from "react-router-dom"
import MovieContainer from "../components/MovieContainer"
import TVShowContainer from "../components/TVShowContainer"

const MediaSortingAndSelectionPage = () => {
  const location = useLocation();
  const path = location.pathname.split('/');
  return (
    <Grid templateAreas={{
          base: `"aside" "content"`,
          lg: `"aside content"`
      }}
        templateColumns={{
            base: '1fr',
            lg: '300px 1fr'
      }}
    >
    <GridItem area="aside" paddingX={2}>
      <SortFilterSidebar />
    </GridItem>
    <GridItem area="content">
      {path[1] === 'movie' && <MovieContainer path={path[2]} />}
      {path[1] === 'tv' && <TVShowContainer path={path[2]} />}
    </GridItem>
  </Grid>
  )
}

export default MediaSortingAndSelectionPage


