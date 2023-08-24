import { HStack, Image, Center } from '@chakra-ui/react'
import logo from '../assets/Logo.svg.png'
import ColorModeSwitch from './ColorModeSwitch'
import CategorySelector from './CategorySelector'

const NavBar = () => {
  const movies = ['popular', 'top rated', 'upcoming', 'now playing'];
  const tvShows = ['popular', 'top rated', 'on tv', 'airing today'];
  return (
    <HStack justifyContent='space-between' padding='10px'>        
        <HStack justifyContent='space-between' spacing={10}>
          <Center boxSize='60px'>
              <Image src={logo} alt="logo" />
          </Center>
          <CategorySelector title='Movies' category={movies} setCategory={(category : string) => console.log(category)} />
          <CategorySelector title='TV Shows' category={tvShows} setCategory={(category : string) => console.log(category)} />
        </HStack>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar