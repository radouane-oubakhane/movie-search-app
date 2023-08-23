import { Stack, Button } from '@chakra-ui/react'


interface Props {
    onSelectTimeWindow: (timeWindow: 'day' | 'week') => void;
    selectedTimeWindow: 'day' | 'week';
}



const TrendingContentSelector = ({ onSelectTimeWindow, selectedTimeWindow }: Props) => {
  return (
    <Stack  direction='row' spacing={4} align='center'>
  <Button colorScheme='pink' variant={selectedTimeWindow == 'day' ? 'solid': 'ghost' }
    onClick={() => onSelectTimeWindow('day')}
  >
    Today
  </Button>
  <Button colorScheme='twitter' variant={selectedTimeWindow == 'week' ? 'solid': 'ghost' }
    onClick={() => onSelectTimeWindow('week')}
  >
    This week
  </Button>
</Stack>
  )
}

export default TrendingContentSelector