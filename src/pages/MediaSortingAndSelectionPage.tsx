import { Grid, GridItem } from "@chakra-ui/react"
import MovieGrid from "../components/MovieGrid"
import SortFilterSidebar from "../components/SortFilterSidebar"
import { useLocation } from "react-router-dom"

const MediaSortingAndSelectionPage = () => {
  const location = useLocation()
  console.log(location.pathname)
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
      <MovieGrid />
    </GridItem>
  </Grid>
  )
}

export default MediaSortingAndSelectionPage


