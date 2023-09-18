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


  const { data: movies, isLoading: moviesIsLoading, error: moviesError } = useSearchMovies(querySearch);
  const { data: tvShows, isLoading: tvShowsIsLoading, error: tvShowsError } = useSearchTVShows(querySearch);
  const { data: people, isLoading: peopleIsLoading, error: peopleError } = useSearchPeople(querySearch);
  const { data: collections, isLoading: collectionsIsLoading, error: collectionsError } = useSearchCollections(querySearch);
  const { data: keywords, isLoading: keywordsIsLoading, error: keywordsError } = useSearchKeywords(querySearch);
  const { data: companies, isLoading: companiesIsLoading, error: companiesError } = useSearchCompanies(querySearch);


  const searchResultsSections = [
    {label: 'Movies', count: movies?.total_results || 0},
    {label: 'TV Shows', count: tvShows?.total_results || 0},
    {label: 'People', count: people?.total_results || 0},
    {label: 'Collections', count: collections?.total_results || 0},
    {label: 'Keywords', count: keywords?.total_results || 0},
    {label: 'Companies', count: companies?.total_results || 0},
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

        {selectedSection === 'Movies' && movies &&
        <MovieInfoBoxGrid 
        movies={movies.results} 
        isLoading={moviesIsLoading} 
        error={moviesError?.message}
        />}

        {selectedSection === 'TV Shows' && tvShows &&
        <TVShowInfoBoxGrid
        tvShows={tvShows.results} 
        isLoading={tvShowsIsLoading}
        error={tvShowsError?.message}
        />}

        {selectedSection === 'People' && people &&
        <PersonInfoBoxGrid 
        people={people.results}
        isLoading={peopleIsLoading}
        error={peopleError?.message}
        />}

        {selectedSection === 'Collections' && collections &&
        <CollectionInfoBoxGrid
        collections={collections.results}
        isLoading={collectionsIsLoading}
        error={collectionsError?.message}
        />}

        {selectedSection === 'Keywords' && keywords &&
        <KeywordInfoList
        keywords={keywords.results}
        isLoading={keywordsIsLoading}
        error={keywordsError?.message}
        />}

        {selectedSection === 'Companies' && companies &&
        <CompanyInfoList
        companies={companies.results}
        isLoading={companiesIsLoading}
        error={companiesError?.message}
        />}

      </GridItem>
      
    </Grid>
    </>
    
  )
}

export default SearchResultsPage


