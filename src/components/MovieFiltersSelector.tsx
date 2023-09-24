import {
  VStack,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Accordion,
  Heading,
  Divider,
  Text,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import GenreList from "./GenreList";
import LanguageSelector from "./LanguageSelector";
import MinimumUserVotesSelector from "./MinimumUserVotesSelector";
import RangeSliderSelector from "./RangeSliderSelector";
import KeywordInput from "./KeywordInput";
import useMediaContentQueryStore from "../store";
import useMovieGenres from "../hooks/useMovieGenres";



const MovieFiltersSelector = () => {
  const setPrimaryReleaseDateGte = useMediaContentQueryStore(s => s.setPrimaryReleaseDateGte);
  const setPrimaryReleaseDateLte = useMediaContentQueryStore(s => s.setPrimaryReleaseDateLte);
  const setUserScore = useMediaContentQueryStore(s => s.setUserScore);
  const setRuntime = useMediaContentQueryStore(s => s.setRuntime);
  const { data: genres } = useMovieGenres();
  
  return (
    <Accordion defaultIndex={window.innerWidth < 479 ? [1] : [0]}
    allowMultiple boxShadow="md" marginBottom={8}>
      <AccordionItem borderRadius="5px">
        <h1>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading size="sm">Filters</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h1>
        <Divider />
        <AccordionPanel pb={4}>
          <VStack spacing={4} align="stretch">
            <Text>Release Dates</Text>
            <VStack>
              <SimpleGrid
                columns={2}
                justifyContent="space-between"
                spacingY={3}
              >
                <Text color="gray.400">from</Text>
                <Input
                  onChange={(event) => setPrimaryReleaseDateGte(event.target.value)}
                  placeholder="Select Date and Time"
                  size="sm"
                  type="date"
                />
                <Text color="gray.400">to</Text>
                <Input
                  onChange={(event) => setPrimaryReleaseDateLte(event.target.value)}
                  placeholder="Select Date and Time"
                  size="sm"
                  type="date"
                />
              </SimpleGrid>
            </VStack>
          </VStack>
        </AccordionPanel>
        <Divider />
        <AccordionPanel pb={4}>
          <Text paddingBottom={3}>Genres</Text>
          <GenreList genres={genres}/>
        </AccordionPanel>
        <Divider />
        <AccordionPanel pb={4}>
          <Text paddingBottom={3}>Language</Text>
          <LanguageSelector />
        </AccordionPanel>
        <Divider />
        <AccordionPanel pb={4}>
          <Text paddingBottom={3}>User Score</Text>
          <RangeSliderSelector
            min={0}
            max={10}
            onRangeChange={setUserScore}
          />
        </AccordionPanel>
        <Divider />
        <AccordionPanel pb={4}>
          <Text paddingBottom={3}>Minimum User Votes</Text>
          <MinimumUserVotesSelector />
        </AccordionPanel>
        <Divider />
        <AccordionPanel pb={4}>
          <Text paddingBottom={3}>Runtime</Text>
          <RangeSliderSelector
            min={0}
            max={400}
            onRangeChange={setRuntime}
          />
        </AccordionPanel>
        <Divider />
        <AccordionPanel pb={4}>
          <Text paddingBottom={3}>Keywords</Text>
          <KeywordInput />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MovieFiltersSelector;
