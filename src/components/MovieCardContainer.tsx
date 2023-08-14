import { Box } from "@chakra-ui/react"



interface Props {
    children: React.ReactNode
}


const MovieCardContainer = ({children}: Props) => {
  return (
    <Box 
    w='200px'
    >
        {children}
    </Box>
  )
}

export default MovieCardContainer