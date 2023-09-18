import { VStack, Text } from "@chakra-ui/react";
import { Person } from "../hooks/useSearchPeople";
import PersonInfoBox from "./PersonInfoBox";
import PersonInfoBoxSkeleton from "./PersonInfoBoxSkeleton";



interface Props {
  people: Person[];
  isLoading: boolean;
  error: string | undefined;
}


const PersonInfoBoxGrid = ({ people, isLoading, error }: Props) => {
  const skeletons = Array(12).fill(0);


  if (error) return <Text fontSize='2xl' textAlign='center'>{error}</Text>;


  return (
    <VStack
    spacing={4}
    align='stretch'
    >
      {
        isLoading && skeletons.map((_, index) => (
          <PersonInfoBoxSkeleton key={index} />
        ))
      }
      {
        people.map((person, index) => (
            <PersonInfoBox
            key={index} 
            person={person}
            />
        ))
      }
    </VStack>
  )
}

export default PersonInfoBoxGrid