import { Stack, Button } from '@chakra-ui/react'


interface Props {
    onSelectTimeWindow: (timeWindow: 'day' | 'week') => void
}



const TrendingContentSelector = ({ onSelectTimeWindow }: Props) => {
  return (
    <Stack  direction='row' spacing={4} align='center'>
  <Button colorScheme='facebook' variant='ghost' 
    onClick={() => onSelectTimeWindow('day')}
  >
    Today
  </Button>
  <Button colorScheme='twitter' variant='ghost' 
    onClick={() => onSelectTimeWindow('week')}
  >
    This week
  </Button>
</Stack>
  )
}

export default TrendingContentSelector