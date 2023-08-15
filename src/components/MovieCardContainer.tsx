import { Box } from "@chakra-ui/react"



interface Props {
    children: React.ReactNode
}


const MovieCardContainer = ({children}: Props) => {
  return (
    <Box 
    w='100%'
    >
        {children}
    </Box>
  )
}

export default MovieCardContainer