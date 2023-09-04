import { VStack, Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Accordion, Heading, Divider, Select, Text } from "@chakra-ui/react"


interface Props {
  sortingOptions: {label: string, value: string}[];
  onSortChange: (sortingOption: string) => void;
}

const SortingSelector = ({ sortingOptions, onSortChange }: Props) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple >
        <AccordionItem borderRadius="5px" boxShadow='md'>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                <Heading size='md'>Sort</Heading>
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
            <Select onChange={(event) => onSortChange(event.target.value)}>
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



