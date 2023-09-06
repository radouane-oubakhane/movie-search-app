import { VStack } from "@chakra-ui/react";
import SortingSelector from "./SortingSelector";
import MovieFiltersSelector from "./MovieFiltersSelector";



interface Props {
  onSortChange: (sortingOption: string) => void;
  onDateFromChange: (date: string) => void;
  onDateToChange: (date: string) => void;
  onGenreChange: (genreId: string) => void;
  selectedGenreIds:  string[];
  onLanguageChange: (languageOption: string) => void;
}


const MovieSortFilterSidebar = ({ onSortChange, onDateFromChange, onDateToChange, onGenreChange, selectedGenreIds, onLanguageChange }: Props) => {
  const sortingOptions = [
    {label: 'Popularity Descending', value: 'popularity.desc'},
    {label: 'Popularity Ascending', value: 'popularity.asc'},
    {label: 'Rating Descending', value: 'vote_average.desc'},
    {label: 'Rating Ascending', value: 'vote_average.asc'},
    {label: 'Release Date Descending', value: 'primary_release_date.desc'},
    {label: 'Release Date Ascending', value: 'primary_release_date.asc'}
  ];
  
  return (
    <VStack
    spacing={4}
    align='stretch'
    >
      <SortingSelector sortingOptions={sortingOptions} onSortChange={onSortChange} />
      <MovieFiltersSelector 
      onDateFromChange={onDateFromChange} 
      onDateToChange={onDateToChange}
      onGenreChange={onGenreChange} 
      selectedGenreIds={selectedGenreIds}
      onLanguageChange={onLanguageChange}
      />
    </VStack>
  )
}

export default MovieSortFilterSidebar;


