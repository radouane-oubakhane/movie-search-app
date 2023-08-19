import { CircularProgress, CircularProgressLabel, Text } from "@chakra-ui/react"


interface Props {
   averageVote: number;
}

const AverageVoteCircle = ({ averageVote }: Props) => {
  const color = averageVote > 7.5 ? "green.400" : averageVote > 6 ? "yellow.400" : "red.400"
  const votePercentage = parseInt((averageVote * 10).toFixed(0))
  return (
    <CircularProgress value={votePercentage} color={color} >
      <CircularProgressLabel> 
        <Text fontSize="sm" fontWeight="bold">{votePercentage} %</Text>
      </CircularProgressLabel>
    </CircularProgress>
  )
}

export default AverageVoteCircle