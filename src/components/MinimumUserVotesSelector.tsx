import { useState } from 'react';
import { VStack, Slider, SliderMark, SliderFilledTrack, SliderTrack, Tooltip, SliderThumb  } from '@chakra-ui/react';


interface Props {
    onUserScoreChange: (minimumUserVotes: number) => void;
}


const MinimumUserVotesSelector = ({ onUserScoreChange }: Props) => {

    const [sliderValue, setSliderValue] = useState(0)
    const [showTooltip, setShowTooltip] = useState(false)

    const handleSliderChange = (newValue: number) => {
        onUserScoreChange(newValue);
        setSliderValue(newValue);  
    }


    return (
        <VStack spacing={4} align='stretch'>
            <Slider
                id='slider'
                defaultValue={0}
                min={0}
                max={500}
                colorScheme='teal'
                onChange={(value) => handleSliderChange(value)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
                    0
                </SliderMark>
                <SliderMark value={100} mt='1' ml='-2.5' fontSize='sm'>
                    100
                </SliderMark>
                <SliderMark value={200} mt='1' ml='-2.5' fontSize='sm'>
                    200
                </SliderMark>
                <SliderMark value={300} mt='1' ml='-2.5' fontSize='sm'>
                    300
                </SliderMark>
                <SliderMark value={400} mt='1' ml='-2.5' fontSize='sm'>
                    400
                </SliderMark>
                <SliderMark value={500} mt='1' ml='-2.5' fontSize='sm'>
                    500
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg='teal.500'
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${sliderValue} votes`}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </VStack>
    )
}

export default MinimumUserVotesSelector


