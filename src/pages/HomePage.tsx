import { Divider } from "@chakra-ui/react"
import TrendingMovieGrid from "../components/TrendingMovieGrid"
import TrendingTVShowGrid from "../components/TrendingTVShowGrid"
import DiscoveryHeader from "../components/DiscoveryHeader"

const HomePage = () => {
  return (
    <>
      <Divider orientation='horizontal' marginBottom={4}/>
      <DiscoveryHeader />
      <Divider orientation='horizontal' marginBottom={4}/>
      <TrendingMovieGrid />
      <Divider orientation='horizontal'  marginY={4} />
      <TrendingTVShowGrid />
    </>
  )
}

export default HomePage