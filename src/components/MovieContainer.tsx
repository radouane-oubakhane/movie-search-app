import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import useMediaContentQueryStore from "../store";
import ContainerHeading from "./ContainerHeading";
import MovieGrid from "./MovieGrid";
import MovieSortFilterSidebar from "./MovieSortFilterSidebar";

interface Props {
  path: string;
}

const MovieContainer = ({ path }: Props) => {
  const mediaContentQuery = useMediaContentQueryStore(
    s => s.mediaContentQuery
  );
  const setSortBy = useMediaContentQueryStore(s => s.setSortBy);
  const reset = useMediaContentQueryStore(s => s.reset);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    reset(); // reset all query params

    if (path === "popular") {
      setSortBy("popularity.desc");
    }
    if (path === "top-rated") {
      setSortBy("vote_count.desc");
    }
    if (path === "upcoming") {
      setSortBy("popularity.desc");
    }
    if (path === "now-playing") {
      setSortBy("primary_release_date.desc");
    }
  }, [path]);

  const heading = [
    { title: "Popular", route: "popular" },
    { title: "Top Rated", route: "top-rated" },
    { title: "Upcoming", route: "upcoming" },
    { title: "Now Playing", route: "now-playing" },
  ];

  const title = heading.find((item) => item.route === path)?.title || "";

  return (
    <Grid
      templateAreas={{
        base: `"heading" "aside" "content"`,
        sm: `"heading heading" "aside content"`,
      }}
      templateColumns={{
        base: "1fr",
        sm: "300px 1fr",
      }}
    >
      <GridItem area="heading" paddingX={2}>
        <ContainerHeading category="Movies" title={title} />
      </GridItem>
      <GridItem area="aside" paddingX={2}>
        <MovieSortFilterSidebar />
      </GridItem>
      <GridItem area="content">
        <MovieGrid movieQuery={mediaContentQuery} />
      </GridItem>
    </Grid>
  );
};

export default MovieContainer;
