import { Divider } from "@chakra-ui/react";
import TrendingMovieGrid from "../components/TrendingMovieGrid";
import TrendingTVShowGrid from "../components/TrendingTVShowGrid";
import DiscoveryHeader from "../components/DiscoveryHeader";
import Footer from "../components/Footer";
import TrendingPersonGrid from "../components/TrendingPersonGrid";

const HomePage = () => {
  return (
    <>
      <Divider orientation="horizontal" marginBottom={4} />
      <DiscoveryHeader />
      <Divider orientation="horizontal" marginBottom={4} />
      <TrendingMovieGrid />
      <Divider orientation="horizontal" marginY={4} />
      <TrendingTVShowGrid />
      <Divider orientation="horizontal" marginY={4} />
      <TrendingPersonGrid />
      <Footer />
    </>
  );
};

export default HomePage;


