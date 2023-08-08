import { Card, CardBody, Heading, Hide, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
    movie: Movie;
}



const MovieCard = ({ movie }: Props) => {
  return (
   <Card borderRadius={10} overflow='hidden'>
    <Image 
    src={'https://image.tmdb.org/t/p/original' + movie.poster_path} 
    alt={`${movie.title} poster`} 
    />
    <CardBody>
        <Heading>
            {movie.title}
        </Heading>
    </CardBody>
   </Card>
  )
}

export default MovieCard