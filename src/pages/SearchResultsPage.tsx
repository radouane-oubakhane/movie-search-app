import { Box, Divider, Grid, GridItem, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import SearchResultsSections from "../components/SearchResultsSections";
import MovieInfoBoxGrid from "../components/MovieInfoBoxGrid";
import { useSearchParams } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovies";
import { useState } from "react";
import useSearchTVShows from "../hooks/useSearchTVShows";
import TVShowInfoBoxGrid from "../components/TVShowInfoBoxGrid";
import useSearchPeople from "../hooks/useSearchPeople";
import PersonInfoBoxGrid from "../components/PersonInfoBoxGrid";
import {BsSearch} from "react-icons/bs";
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
    query: searchParams.get('query') || ''
  });


  const { mediaContent: movies, isLoading: moviesIsLoading, error: moviesError, totalResults: moviesTotalResults } = useSearchMovies(querySearch);
  const { mediaContent: tvShows, isLoading: tvShowsIsLoading, error: tvShowsError, totalResults: tvShowsTotalResults } = useSearchTVShows(querySearch);
  const { mediaContent: people, isLoading: peopleIsLoading, error: peopleError, totalResults: peopleTotalResults } = useSearchPeople(querySearch);
  const { mediaContent: collections, isLoading: collectionsIsLoading, error: collectionsError, totalResults: collectionsTotalResults } = useSearchCollections(querySearch);
  const { mediaContent: keywords, isLoading: keywordsIsLoading, error: keywordsError, totalResults: keywordsTotalResults } = useSearchKeywords(querySearch);
  const { mediaContent: companies, isLoading: companiesIsLoading, error: companiesError, totalResults: companiesTotalResults } = useSearchCompanies(querySearch);


  const searchResultsSections = [
    {label: 'Movies', count: moviesTotalResults},
    {label: 'TV Shows', count: tvShowsTotalResults},
    {label: 'People', count: peopleTotalResults},
    {label: 'Collections', count: collectionsTotalResults},
    {label: 'Keywords', count: keywordsTotalResults},
    {label: 'Companies', count: companiesTotalResults},
  ];
  


  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
  }



  return (
    <>
      <Box paddingX={8}>
        <InputGroup>
                  <InputLeftElement children={<BsSearch />} />
                  <Input 
                  fontStyle="italic" 
                  color="gray.500"
                  placeholder='Search for a movie, tv show, person...'
                  value={searchParams.get('query') || ''}
                  onChange={(event) => {
                    setSearchParams({query: event.currentTarget.value});
                    setQuerySearch({query: event.currentTarget.value});
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
        lg: `"aside content"`
        }}
      templateColumns={{
          base: '1fr',
          lg: '300px 1fr'
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

        {selectedSection === 'Movies' && 
        <MovieInfoBoxGrid 
        movies={movies} 
        isLoading={moviesIsLoading} 
        error={moviesError}
        />}

        {selectedSection === 'TV Shows' && 
        <TVShowInfoBoxGrid
        tvShows={tvShows} 
        isLoading={tvShowsIsLoading}
        error={tvShowsError}
        />}

        {selectedSection === 'People' &&
        <PersonInfoBoxGrid 
        people={people}
        isLoading={peopleIsLoading}
        error={peopleError}
        />}

        {selectedSection === 'Collections' &&
        <CollectionInfoBoxGrid
        collections={collections}
        isLoading={collectionsIsLoading}
        error={collectionsError}
        />}

        {selectedSection === 'Keywords' &&
        <KeywordInfoList
        keywords={keywords}
        isLoading={keywordsIsLoading}
        error={keywordsError}
        />}

        {selectedSection === 'Companies' &&
        <CompanyInfoList
        companies={companies}
        isLoading={companiesIsLoading}
        error={companiesError}
        />}

      </GridItem>
      
    </Grid>
    </>
    
  )
}

export default SearchResultsPage


