import { VStack, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Accordion, Heading, Divider, Text, Input, HStack, SimpleGrid } from "@chakra-ui/react"
import MovieGenreList from "./MovieGenreList";

interface Props {
    onDateFromChange: (date: string) => void;
    onDateToChange: (date: string) => void;
    onGenreChange: (genreId: string) => void;
    selectedGenreIds:  string[];
}


const MovieFiltersSelector = ({ onDateFromChange, onDateToChange, onGenreChange, selectedGenreIds }: Props) => {
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
          <MovieGenreList onGenreChange={onGenreChange} selectedGenreIds={selectedGenreIds} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  )
}

export default MovieFiltersSelector

