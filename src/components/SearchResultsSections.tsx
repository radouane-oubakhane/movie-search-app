import { Text, VStack, Heading, Center, HStack, Badge } from "@chakra-ui/react"


interface SearchResultsSections {
  label: string;
  count: number;
}


interface Props {
  searchResultsSections: SearchResultsSections[];
  selectedSection: string;
  handleSectionChange: (section: string) => void;

}



const SearchResultsSections = ({ 
  searchResultsSections,
  selectedSection,
  handleSectionChange 
}: Props) => {
  return (
    <VStack
      borderRadius="5px"
      align='stretch'
      boxShadow='md'
      overflow="hidden"
      marginBottom={6}
      spacing={0}
    >
      <Center h='40px' bg='blue.400' padding={6} color="white">
        <Heading size='md' >Search Results</Heading>
      </Center>
      {
        searchResultsSections.map((section, index) => (
          <HStack 
          paddingX={6}
          paddingY={4} 
          key={index} 
          justifyContent="space-between"
          onClick={() => handleSectionChange(section.label)}
          cursor="pointer"
          bg={selectedSection === section.label ? 'gray.100' : ''}
          >
            <Text
            color={selectedSection === section.label ? 'black' : ''}
            >
              {section.label}
            </Text>
            <Badge 
            color={selectedSection === section.label ? 'black' : ''}
            size="xl">{section.count}</Badge>
          </HStack>
        ))
      }
    </VStack>
  )
}

export default SearchResultsSections