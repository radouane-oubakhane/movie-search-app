import { HStack, Image, Box, Text, Center } from '@chakra-ui/react'
import logo from '../assets/Logo.svg.png'

const NavBar = () => {
  return (
    <HStack>        
        <Center boxSize='60px'>
            <Image src={logo} alt="logo" />
        </Center>
        <Text>Nav bar</Text>
    </HStack>
  )
}

export default NavBar