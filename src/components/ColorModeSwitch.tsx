import {Button, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";



function ColorModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}

export default ColorModeSwitch






















// import { HStack, Switch, Text, useColorMode} from "@chakra-ui/react"


// const ColorModeSwitch = () => {
//   const {toggleColorMode, colorMode} = useColorMode()
//   return (
//     <HStack>
//       <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
//       <Text>Dark mode</Text>
//     </HStack>
//   )
// }

// export default ColorModeSwitch