import { Button, Text } from "@chakra-ui/react";
import useMediaContentQueryStore from "../store";

interface Props {
  genres: {
    id: number;
    name: string;
  }[];
}

const MovieGenreList = ({ genres }: Props) => {
  const withGenres = useMediaContentQueryStore(
    (s) => s.mediaContentQuery.withGenres
  );
  const setGenres = useMediaContentQueryStore((s) => s.setGenres);
  const selectedGenreIds = withGenres?.split(",") || [];

  const onGenreChange = (genreId: string) => {
    const genres = withGenres?.split(",");
    if (!genres?.includes(genreId)) {
      setGenres(`${withGenres ? withGenres + "," : ""}${genreId}`);
    } else {
      const newGenres = genres.filter((genre) => genre !== genreId);
      setGenres(newGenres.join(","));
    }
  };

  return (
    <ul>
      {genres.map((genre) => (
        <Button
          onClick={() => onGenreChange(genre.id.toString())}
          colorScheme="gray"
          padding={2}
          margin={1}
          variant={
            selectedGenreIds.includes(genre.id.toString()) ? "solid" : "outline"
          }
          key={genre.id}
        >
          <Text>{genre.name}</Text>
        </Button>
      ))}
    </ul>
  );
};

export default MovieGenreList;
