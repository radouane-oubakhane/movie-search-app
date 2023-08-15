import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import MovieGrid from "./components/MovieGrid"

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
        <MovieGrid />
      </GridItem>
    </Grid>
  )
}

export default App

