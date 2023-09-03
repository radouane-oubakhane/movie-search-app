import { Heading } from "@chakra-ui/react"



interface Props {
    title: string;
    category: string;
}





const ContainerHeading = ({ title, category }: Props) => {
  return (
    <Heading as="h1" size="lg" mb={4}>{title} {category}</Heading>
  )
}

export default ContainerHeading