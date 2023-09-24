import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import useMediaContentQueryStore from "../store";
import ContainerHeading from "./ContainerHeading";
import TVShowGrid from "./TVShowGrid";
import TVShowSortFilterSidebar from "./TVShowSortFilterSidebar";

interface Props {
  path: string;
}

const TVShowContainer = ({ path }: Props) => {
  const setSortBy = useMediaContentQueryStore((s) => s.setSortBy);
  const reset = useMediaContentQueryStore((s) => s.reset);
  const setFirstAirDateGte = useMediaContentQueryStore(
    (s) => s.setFirstAirDateGte
  );
  const setFirstAirDateLte = useMediaContentQueryStore(
    (s) => s.setFirstAirDateLte
  );

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const nextWeek = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    reset(); // reset all query params

    if (path === "popular") {
      setSortBy("popularity.desc");
    }
    if (path === "top-rated") {
      setSortBy("vote_count.desc");
    }
    if (path === "on-the-air") {
      setFirstAirDateGte(today);
      setFirstAirDateLte(nextWeek);
      setSortBy("popularity.desc");
    }
    if (path === "airing-today") {
      setFirstAirDateGte(today);
      setFirstAirDateLte(today);
      setSortBy("popularity.desc");
    }
  }, [path]);

  const heading = [
    { title: "Popular", route: "popular" },
    { title: "Top Rated", route: "top-rated" },
    { title: "Currently Airing", route: "on-the-air" },
    { title: "Airing Today", route: "airing-today" },
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
        <ContainerHeading category="TV Shows" title={title} />
      </GridItem>
      <GridItem area="aside" paddingX={2}>
        <TVShowSortFilterSidebar />
      </GridItem>
      <GridItem area="content">
        <TVShowGrid />
      </GridItem>
    </Grid>
  );
};

export default TVShowContainer;
