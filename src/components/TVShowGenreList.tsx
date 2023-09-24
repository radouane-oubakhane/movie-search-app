import { Button, Text } from "@chakra-ui/react";
import useTVShowGenres from "../hooks/useTVShowGenres";
import useMediaContentQueryStore from "../store";

const TVShowGenreList = () => {
  const withGenres = useMediaContentQueryStore(
    (s) => s.mediaContentQuery.withGenres
  );
  const setWithGenres = useMediaContentQueryStore((s) => s.setWithGenres);
  const { data: genres } = useTVShowGenres();
  const selectedGenreIds = withGenres?.split(",") || [];

  const onGenreChange = (genreId: string) => {
    const genres = withGenres?.split(",");
    if (!genres?.includes(genreId)) {
      setWithGenres(`${withGenres ? withGenres + "," : ""}${genreId}`);
    } else {
      const newGenres = genres.filter((genre) => genre !== genreId);
      setWithGenres(newGenres.join(","));
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

export default TVShowGenreList;
