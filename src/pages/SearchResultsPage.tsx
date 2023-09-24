import {
  Box,
  Divider,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import CollectionInfoBoxGrid from "../components/CollectionInfoBoxGrid";
import CompanyInfoList from "../components/CompanyInfoList";
import KeywordInfoList from "../components/KeywordInfoList";
import MovieInfoBoxGrid from "../components/MovieInfoBoxGrid";
import PersonInfoBoxGrid from "../components/PersonInfoBoxGrid";
import SearchResultsSections from "../components/SearchResultsSections";
import TVShowInfoBoxGrid from "../components/TVShowInfoBoxGrid";
import useSearchCollections from "../hooks/useSearchCollections";
import useSearchCompanies from "../hooks/useSearchCompanies";
import useSearchKeywords from "../hooks/useSearchKeywords";
import useSearchMovies from "../hooks/useSearchMovies";
import useSearchPeople from "../hooks/useSearchPeople";
import useSearchTVShows from "../hooks/useSearchTVShows";
import useMediaContentQueryStore from "../store";

const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSection, setSelectedSection] = useState<string>("Movies");
  const mediaContentQuery = useMediaContentQueryStore(
    (s) => s.mediaContentQuery
  );
  const setSearchText = useMediaContentQueryStore((s) => s.setSearchText);

  useEffect(() => {
    setSearchText(searchParams.get("query") || "");
    return () => setSearchText("");
  }, []);

  const {
    data: movies,
    isLoading: moviesIsLoading,
    error: moviesError,
    isFetchingNextPage: moviesIsFetchingNextPage,
    fetchNextPage: moviesFetchNextPage,
    hasNextPage: moviesHasNextPage,
  } = useSearchMovies(mediaContentQuery);
  const {
    data: tvShows,
    isLoading: tvShowsIsLoading,
    error: tvShowsError,
    isFetchingNextPage: tvShowsIsFetchingNextPage,
    fetchNextPage: tvShowsFetchNextPage,
    hasNextPage: tvShowsHasNextPage,
  } = useSearchTVShows(mediaContentQuery);
  const {
    data: people,
    isLoading: peopleIsLoading,
    error: peopleError,
    isFetchingNextPage: peopleIsFetchingNextPage,
    fetchNextPage: peopleFetchNextPage,
    hasNextPage: peopleHasNextPage,
  } = useSearchPeople(mediaContentQuery);
  const {
    data: collections,
    isLoading: collectionsIsLoading,
    error: collectionsError,
    isFetchingNextPage: collectionsIsFetchingNextPage,
    fetchNextPage: collectionsFetchNextPage,
    hasNextPage: collectionsHasNextPage,
  } = useSearchCollections(mediaContentQuery);
  const {
    data: keywords,
    isLoading: keywordsIsLoading,
    error: keywordsError,
    fetchNextPage: keywordsFetchNextPage,
    hasNextPage: keywordsHasNextPage,
  } = useSearchKeywords(mediaContentQuery);
  const {
    data: companies,
    isLoading: companiesIsLoading,
    error: companiesError,
    fetchNextPage: companiesFetchNextPage,
    hasNextPage: companiesHasNextPage,
  } = useSearchCompanies(mediaContentQuery);

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
              setSearchText(event.currentTarget.value);
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
          sm: `"aside content"`,
        }}
        templateColumns={{
          base: "1fr",
          sm: "300px 1fr",
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
