import { VStack, Heading } from "@chakra-ui/react"
import SearchInput from "./SearchInput"

const DiscoveryHeader = () => {
  return (
    <VStack align='stretch' paddingX={16} spacing={0}>
        <Heading as='h2' size='2xl' paddingBottom={2} paddingTop={12}>Welcome.</Heading>
        <Heading as='h2' size='xl' >Millions of movies and TV shows to discover. Explore now.</Heading>
        <SearchInput />
    </VStack>
  )
}

export default DiscoveryHeader