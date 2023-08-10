import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"


interface Props {
   averageVote: number;
}

const AverageVoteCircle = ({ averageVote }: Props) => {
    const votePercentage = averageVote * 10
  return (
    <CircularProgress value={votePercentage} color='green.400'>
        <CircularProgressLabel>{votePercentage} % </CircularProgressLabel>
    </CircularProgress>
  )
}

export default AverageVoteCircle