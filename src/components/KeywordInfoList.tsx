import { Text, ListItem, UnorderedList, Skeleton } from "@chakra-ui/react";

import { keyword } from "../hooks/useSearchKeywords";


interface Props {
  keywords: keyword[];
  isLoading: boolean;
  error: string | undefined;
}


const KeywordInfoList = ({ keywords, isLoading, error }: Props) => {
  const skeletons = Array(12).fill(0);


  if (error) return <Text fontSize='2xl' textAlign='center'>{error}</Text>;


  return (
    <>
      <UnorderedList>
        {
          isLoading && skeletons.map((_, index) => (
            <Text boxShadow="md" padding={4} key={index}>
              <Skeleton height='10px' />
            </Text>
          ))
        }
      </UnorderedList>
    

      <UnorderedList>
        {
          keywords.map((keyword) => (
            <ListItem key={keyword.id}>
              {keyword.name}
            </ListItem>))
        }
      </UnorderedList>
    </>
  )
}

export default KeywordInfoList