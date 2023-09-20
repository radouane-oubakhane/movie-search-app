import {
  Box,
  Divider,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SearchResultsSections from "../components/SearchResultsSections";
import MovieInfoBoxGrid from "../components/MovieInfoBoxGrid";
import { useSearchParams } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovies";
import { useState } from "react";
import useSearchTVShows from "../hooks/useSearchTVShows";
import TVShowInfoBoxGrid from "../components/TVShowInfoBoxGrid";
import useSearchPeople from "../hooks/useSearchPeople";
import PersonInfoBoxGrid from "../components/PersonInfoBoxGrid";
import { BsSearch } from "react-icons/bs";
import useSearchCollections from "../hooks/useSearchCollections";
import CollectionInfoBoxGrid from "../components/CollectionInfoBoxGrid";
import KeywordInfoList from "../components/KeywordInfoList";
import useSearchKeywords from "../hooks/useSearchKeywords";
import useSearchCompanies from "../hooks/useSearchCompanies";
import CompanyInfoList from "../components/CompanyInfoList";

export interface QuerySearch {
  query: string;
}

const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSection, setSelectedSection] = useState<string>("Movies");
  const [querySearch, setQuerySearch] = useState<QuerySearch>({
    query: searchParams.get("query") || "",
  });

  const {
    data: movies,
    isLoading: moviesIsLoading,
    error: moviesError,
    isFetchingNextPage: moviesIsFetchingNextPage,
    fetchNextPage: moviesFetchNextPage,
    hasNextPage: moviesHasNextPage,
  } = useSearchMovies(querySearch);
  const {
    data: tvShows,
    isLoading: tvShowsIsLoading,
    error: tvShowsError,
    isFetchingNextPage: tvShowsIsFetchingNextPage,
    fetchNextPage: tvShowsFetchNextPage,
    hasNextPage: tvShowsHasNextPage,
  } = useSearchTVShows(querySearch);
  const {
    data: people,
    isLoading: peopleIsLoading,
    error: peopleError,
    isFetchingNextPage: peopleIsFetchingNextPage,
    fetchNextPage: peopleFetchNextPage,
    hasNextPage: peopleHasNextPage,
  } = useSearchPeople(querySearch);
  const {
    data: collections,
    isLoading: collectionsIsLoading,
    error: collectionsError,
    isFetchingNextPage: collectionsIsFetchingNextPage,
    fetchNextPage: collectionsFetchNextPage,
    hasNextPage: collectionsHasNextPage,
  } = useSearchCollections(querySearch);
  const {
    data: keywords,
    isLoading: keywordsIsLoading,
    error: keywordsError,
    isFetchingNextPage: keywordsIsFetchingNextPage,
    fetchNextPage: keywordsFetchNextPage,
    hasNextPage: keywordsHasNextPage,
  } = useSearchKeywords(querySearch);
  const {
    data: companies,
    isLoading: companiesIsLoading,
    error: companiesError,
    isFetchingNextPage: companiesIsFetchingNextPage,
    fetchNextPage: companiesFetchNextPage,
    hasNextPage: companiesHasNextPage,
  } = useSearchCompanies(querySearch);

  const searchResultsSections = [
    { label: "Movies", count: movies?.pages[0].total_results || 0 },
    { label: "TV Shows", count: tvShows?.pages[0].total_results || 0 },
    { label: "People", count: people?.pages[0].total_results || 0 },
    { label: "Collections", count: collections?.pages[0].total_results || 0 },
    { label: "Keywords", count: keywords?.pages[0].total_results || 0 },
    { label: "Companies", count: companies?.pages[0].total_results || 0 },
  ];

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Box paddingX={8}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            fontStyle="italic"
            color="gray.500"
            placeholder="Search for a movie, tv show, person..."
            value={searchParams.get("query") || ""}
            onChange={(event) => {
              setSearchParams({ query: event.currentTarget.value });
              setQuerySearch({ query: event.currentTarget.value });
            }}
            variant=""
          />
        </InputGroup>
      </Box>

      <Divider />
      <Grid
        padding={8}
        templateAreas={{
          base: `"aside" "content"`,
          lg: `"aside content"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <GridItem area="aside" paddingX={2}>
          <SearchResultsSections
            searchResultsSections={searchResultsSections}
            selectedSection={selectedSection}
            handleSectionChange={handleSectionChange}
          />
        </GridItem>
        <GridItem area="content" paddingX={2}>
          {selectedSection === "Movies" && movies && (
            <MovieInfoBoxGrid
              movies={movies}
              isLoading={moviesIsLoading}
              error={moviesError?.message}
              isFetchingNextPage={moviesIsFetchingNextPage}
              fetchNextPage={moviesFetchNextPage}
              hasNextPage={moviesHasNextPage}
            />
          )}

          {selectedSection === "TV Shows" && tvShows && (
            <TVShowInfoBoxGrid
              tvShows={tvShows}
              isLoading={tvShowsIsLoading}
              error={tvShowsError?.message}
              isFetchingNextPage={tvShowsIsFetchingNextPage}
              fetchNextPage={tvShowsFetchNextPage}
              hasNextPage={tvShowsHasNextPage}
            />
          )}

          {selectedSection === "People" && people && (
            <PersonInfoBoxGrid
              people={people}
              isLoading={peopleIsLoading}
              error={peopleError?.message}
              isFetchingNextPage={peopleIsFetchingNextPage}
              fetchNextPage={peopleFetchNextPage}
              hasNextPage={peopleHasNextPage}
            />
          )}

          {selectedSection === "Collections" && collections && (
            <CollectionInfoBoxGrid
              collections={collections}
              isLoading={collectionsIsLoading}
              error={collectionsError?.message}
              isFetchingNextPage={collectionsIsFetchingNextPage}
              fetchNextPage={collectionsFetchNextPage}
              hasNextPage={collectionsHasNextPage}
            />
          )}

          {selectedSection === "Keywords" && keywords && (
            <KeywordInfoList
              keywords={keywords}
              isLoading={keywordsIsLoading}
              error={keywordsError?.message}
              fetchNextPage={keywordsFetchNextPage}
              hasNextPage={keywordsHasNextPage}
            />
          )}

          {selectedSection === "Companies" && companies && (
            <CompanyInfoList
              companies={companies}
              isLoading={companiesIsLoading}
              error={companiesError?.message}
              fetchNextPage={companiesFetchNextPage}
              hasNextPage={companiesHasNextPage}
            />
          )}
        </GridItem>
      </Grid>
    </>
  );
};

export default SearchResultsPage;
