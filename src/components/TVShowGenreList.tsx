import { Button, Text } from "@chakra-ui/react"
import useTVShowGenres from "../hooks/useTVShowGenres"


interface Props {
  onGenreChange: (genreId: string) => void;
  selectedGenreIds:  string[];
}


const TVShowGenreList = ({ onGenreChange, selectedGenreIds }: Props) => {
  const { data: genres } = useTVShowGenres()

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

export default TVShowGenreList