import { Button, Text } from "@chakra-ui/react"
import useMovieGenres from "../hooks/useMovieGenres"


interface Props {
  onGenreChange: (genreId: string) => void;
  selectedGenreIds:  string[];
}


const MovieGenreList = ({ onGenreChange, selectedGenreIds }: Props) => {
  const { genres } = useMovieGenres()

  return (
    <ul>
      {genres.map((genre) => (
        <Button 
        onClick={() => onGenreChange(genre.id.toString())}
        colorScheme='gray' 
        padding={2} 
        margin={1} 
        variant={selectedGenreIds.includes(genre.id.toString()) ? 'solid' : 'outline'}
        key={genre.id}
        >
        <Text>{genre.name}</Text>
      </Button>
      ))}
    </ul>
  )
}

export default MovieGenreList


