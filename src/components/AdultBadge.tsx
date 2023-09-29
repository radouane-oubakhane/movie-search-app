import { Badge } from "@chakra-ui/react";

interface Props {
  isAdult: boolean;
}

const AdultBadge = ({ isAdult }: Props) => {
    if (!isAdult) return null;
    return (
        <Badge colorScheme="red" variant="solid">
            Adult
        </Badge>
        );
  
};

export default AdultBadge;
