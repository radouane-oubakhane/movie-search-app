import { VStack } from "@chakra-ui/react";
import SortingSelector from "./SortingSelector";
import MovieFiltersSelector from "./MovieFiltersSelector";



const MovieSortFilterSidebar = () => {
  const sortingOptions = [
    { label: "Popularity Descending", value: "popularity.desc" },
    { label: "Popularity Ascending", value: "popularity.asc" },
    { label: "Rating Descending", value: "vote_average.desc" },
    { label: "Rating Ascending", value: "vote_average.asc" },
    { label: "Release Date Descending", value: "primary_release_date.desc" },
    { label: "Release Date Ascending", value: "primary_release_date.asc" },
  ];

  return (
    <VStack spacing={4} align="stretch">
      <SortingSelector
        sortingOptions={sortingOptions}
      />
      <MovieFiltersSelector/>
    </VStack>
  );
};

export default MovieSortFilterSidebar;
