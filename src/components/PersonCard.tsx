import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Person } from "../hooks/useSearchPeople";
import getImageUrl from "../services/image-url";

interface Props {
    person: Person;
}



const PersonCard = ({ person }: Props) => {
  return (
    <VStack 
      spacing={4}
      align='stretch'
    >
      <Image boxShadow='md' borderRadius={10} overflow='hidden' 
      objectFit='cover'
      src={getImageUrl(person.profile_path, 'w300')} 
      alt={`${person.name} poster`} 
    />
      <Box>
          <HStack justifyContent='space-between'>
            <VStack align='stretch'>
              <Heading fontSize="1xl" textAlign='start'>
                {person.name}
              </Heading>
              <Text fontSize='sm'>
                
  
                {
                    person.known_for.map((item, index) => (
                        <React.Fragment key={index} >
                            {item.title || item.name} 
                            {(index === person.known_for.length - 1) ? '' : ',' }
                        </React.Fragment>
                    ))
                }
            </Text>
            </VStack>
          </HStack>
      </Box>
    </VStack>
  )
}

export default PersonCard