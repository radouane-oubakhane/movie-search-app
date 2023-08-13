import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"


interface Props {
   averageVote: number;
}

const AverageVoteCircle = ({ averageVote }: Props) => {
  const color = averageVote > 7.5 ? "green.400" : averageVote > 6 ? "yellow.400" : "red.400"
  const votePercentage = averageVote * 10
  return (
    <CircularProgress value={votePercentage} color={color} >
        <CircularProgressLabel>{votePercentage} % </CircularProgressLabel>
    </CircularProgress>
  )
}

export default AverageVoteCircle