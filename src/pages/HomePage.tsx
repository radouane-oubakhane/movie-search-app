import { Divider } from "@chakra-ui/react"
import MovieGrid from "../components/MovieGrid"
import TVShowGrid from "../components/TVShowGrid"

const HomePage = () => {
  return (
    <>
      <Divider orientation='horizontal' marginBottom={4}/>
      <MovieGrid />
      <Divider orientation='horizontal'  marginY={4} />
      <TVShowGrid />
    </>
  )
}

export default HomePage