import { Divider, Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import MovieGrid from "./components/MovieGrid"
import TVShowGrid from "./components/TVShowGrid"

function App() {
  return (
    <Grid templateAreas={
        `"nav" "main"`
      }
      >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Divider orientation='horizontal' marginBottom={4}/>
        <MovieGrid />
        <Divider orientation='horizontal'  marginY={4} />
        <TVShowGrid />
      </GridItem>
    </Grid>
  )
}

export default App

