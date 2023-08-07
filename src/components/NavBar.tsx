import { HStack, Image, Center } from '@chakra-ui/react'
import logo from '../assets/Logo.svg.png'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>        
        <Center boxSize='60px'>
            <Image src={logo} alt="logo" />
        </Center>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar