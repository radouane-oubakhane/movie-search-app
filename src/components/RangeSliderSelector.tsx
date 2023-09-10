import { useState } from 'react';
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Badge, HStack } from '@chakra-ui/react';


interface Props {
    min: number;
    max: number;
    onRangeChange: (userScore: number[]) => void;
}



const RangeSliderSelector = ({ onRangeChange, min, max }: Props) => {
  const [sliderValue, setSliderValue] = useState([0, 10]);

  const handleSliderChange = (newValue: number[]) => {
        onRangeChange(newValue);
        setSliderValue(newValue);
  };

  

  return (
        <HStack spacing={4}>
            <Badge variant='subtle' colorScheme='gray'>
            {sliderValue[0]}
            </Badge>
            <RangeSlider
                value={sliderValue}
                onChange={(newValue => handleSliderChange(newValue))} 
                min={min}
                max={max}
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
  );
}

export default RangeSliderSelector;



