import { VStack, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Accordion, Heading, Divider, Text, Input, HStack, SimpleGrid } from "@chakra-ui/react"
import TVShowGenreList from "./TVShowGenreList";
import LanguageSelector from "./LanguageSelector";
import MinimumUserVotesSelector from "./MinimumUserVotesSelector";
import RangeSliderSelector from "./RangeSliderSelector";
import KeywordInput from "./KeywordInput";

interface Props {
    onDateFromChange: (date: string) => void;
    onDateToChange: (date: string) => void;
    onGenreChange: (genreId: string) => void;
    selectedGenreIds:  string[];
    onLanguageChange: (languageOption: string) => void;
    onUserScoreChange: (userScore: number[]) => void;
    onMinimumUserVotesChange: (minimumUserVotes: number) => void;
    onRuntimeChange: (runtime: number[]) => void;
    onKeywordChange: (keywords: string) => void;
}


const TVShowFiltersSelector = ({ 
  onDateFromChange, 
  onDateToChange, 
  onGenreChange, 
  selectedGenreIds, 
  onLanguageChange,
  onUserScoreChange,
  onMinimumUserVotesChange,
  onRuntimeChange,
  onKeywordChange
 }: Props) => {

  return (
    <Accordion defaultIndex={[0]} allowMultiple >
        <AccordionItem borderRadius="5px" boxShadow='md'>
          <h1>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                <Heading size='sm'>Filters</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <Divider />
          <AccordionPanel pb={4}>
            <VStack
            spacing={4}
            align='stretch'
            >
                <Text>Release Dates</Text>
                <VStack>
                    <SimpleGrid columns={2} justifyContent='space-between' spacingY={3}>
                    <Text color="gray.400">from</Text>
                        <Input
                        onChange={(event) => onDateFromChange(event.target.value)}
                        placeholder="Select Date and Time"
                        size="sm"
                        type="date"
                        />
                        <Text color="gray.400">to</Text>
                        <Input
                        onChange={(event) => onDateToChange(event.target.value)}
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
          <TVShowGenreList onGenreChange={onGenreChange} selectedGenreIds={selectedGenreIds} />
          </AccordionPanel>
          <Divider />
          <AccordionPanel pb={4}> 
            <Text paddingBottom={3}>Language</Text>
            <LanguageSelector onLanguageChange={onLanguageChange} />
          </AccordionPanel>
          <Divider />
          <AccordionPanel pb={4}> 
            <Text paddingBottom={3}>User Score</Text>
            <RangeSliderSelector min={0} max={10} onRangeChange={onUserScoreChange} />
          </AccordionPanel>
          <Divider />
          <AccordionPanel pb={4}> 
            <Text paddingBottom={3}>Minimum User Votes</Text>
            <MinimumUserVotesSelector onUserScoreChange={onMinimumUserVotesChange} />
          </AccordionPanel>
          <Divider />
          <AccordionPanel pb={4}> 
            <Text paddingBottom={3}>Runtime</Text>
            <RangeSliderSelector min={0} max={400} onRangeChange={onRuntimeChange} />
          </AccordionPanel>
          <Divider />
          <AccordionPanel pb={4}> 
            <Text paddingBottom={3}>Keywords</Text>
            <KeywordInput onKeywordChange={onKeywordChange} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  )
}

export default TVShowFiltersSelector


