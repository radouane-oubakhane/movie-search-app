import { FormEvent, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Input, Box } from "@chakra-ui/react";

const SearchInput = () => {
  const searchTermRef = useRef<HTMLInputElement>(null);
  const history = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();

    if (searchTermRef.current) {

      const searchTerm = searchTermRef.current.value
      
      if (searchTerm) {
        history(`/search?query=${searchTerm}`)
      }
  }
}


  return (
    <Box paddingY={10}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Input
        ref={searchTermRef}
        borderRadius={20}
        variant='filled'
        placeholder='Search for a movie, tv show......' 
        />
      </form>
    </Box>
  )
}

export default SearchInput;