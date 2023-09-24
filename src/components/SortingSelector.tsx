import { VStack, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Accordion, Heading, Divider, Select, Text } from "@chakra-ui/react"
import useMediaContentQueryStore from "../store";


interface Props {
  sortingOptions: {label: string, value: string}[];
}

const SortingSelector = ({ sortingOptions }: Props) => {
  const setSortBy = useMediaContentQueryStore((s) => s.setSortBy);
  return (
    <Accordion defaultIndex={[1]} allowMultiple boxShadow='md'>
        <AccordionItem borderRadius="5px">
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                <Heading size='sm'>Sort</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Divider />
          <AccordionPanel pb={4}>
          <VStack
          spacing={4}
          align='stretch'
          >
            <Text>Sort Results By</Text>
            <Select onChange={(event) => setSortBy(event.target.value)}>
              {sortingOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>))
              }
            </Select> 
          </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  )  
}

export default SortingSelector;



