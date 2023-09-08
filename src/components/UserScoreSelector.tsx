import { useState } from 'react';
import { VStack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Badge, Tooltip, SliderThumb, HStack } from '@chakra-ui/react';


interface Props {
    onUserScoreChange: (userScore: number[]) => void;
}



const UserScoreSelector = ({ onUserScoreChange }: Props) => {
  const [sliderValue, setSliderValue] = useState([0, 10]);

  const handleSliderChange = (newValue: number[]) => {
        onUserScoreChange(newValue);
        setSliderValue(newValue);
  };

  

  return (
    <VStack spacing={4} align='stretch'>
        <HStack spacing={4}>

            <Badge variant='subtle' colorScheme='gray'>
            {sliderValue[0]}
            </Badge>
            <RangeSlider
                value={sliderValue}
                onChange={(newValue => handleSliderChange(newValue))} 
                min={0}
                max={10}
                step={1}
            >
                <RangeSliderTrack bg='teal.100'>
                <RangeSliderFilledTrack bg='teal' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={3} index={0} />
                <RangeSliderThumb boxSize={3} index={1} />
            </RangeSlider>
            <Badge variant='subtle' colorScheme='gray'>
                {sliderValue[1]}
            </Badge>
        </HStack>
    </VStack>
  );
}

export default UserScoreSelector;


