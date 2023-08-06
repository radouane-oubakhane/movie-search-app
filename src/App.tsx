import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react"

function App() {
  return (
    <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}>
      <GridItem area="nav" bg="tomato">
        navbar
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="cyan">
          sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        main
      </GridItem>
    </Grid>
  )
}

export default App
