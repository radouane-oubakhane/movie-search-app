import { Button, Text } from "@chakra-ui/react"
import useTVShowGenres from "../hooks/useTVShowGenres"




const TVShowGenreList = () => {
  const { genres, isLoading, isError } = useTVShowGenres()

  return (
    <ul>
      {genres.map((genre) => (
        <Button colorScheme='gray' padding={2} margin={1} variant='outline' key={genre.id}>
        <Text>{genre.name}</Text>
      </Button>
      ))}
    </ul>
  )
}

export default TVShowGenreList