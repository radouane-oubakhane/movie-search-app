import { useState } from 'react';
import { Slider, SliderMark, SliderFilledTrack, SliderTrack, Tooltip, SliderThumb, Box } from '@chakra-ui/react';
import useMediaContentQueryStore from '../store';





const MinimumUserVotesSelector = () => {

    const setVoteCountGte = useMediaContentQueryStore(s => s.setVoteCountGte);

    const [sliderValue, setSliderValue] = useState(0)
    const [showTooltip, setShowTooltip] = useState(false)

    const handleSliderChange = (newValue: number) => {
        setVoteCountGte(newValue);
        setSliderValue(newValue);  
    }


    return (
       
        <Box pb={2}>
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
                <SliderMark value={0} mt='2' ml='-2.5' fontSize='sm'>
                    0
                </SliderMark>
                <SliderMark value={100} mt='2' ml='-2.5' fontSize='sm'>
                    100
                </SliderMark>
                <SliderMark value={200} mt='2' ml='-2.5' fontSize='sm'>
                    200
                </SliderMark>
                <SliderMark value={300} mt='2' ml='-2.5' fontSize='sm'>
                    300
                </SliderMark>
                <SliderMark value={400} mt='2' ml='-2.5' fontSize='sm'>
                    400
                </SliderMark>
                <SliderMark value={500} mt='2' ml='-2.5' fontSize='sm'>
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
        </Box>
    )
}

export default MinimumUserVotesSelector


