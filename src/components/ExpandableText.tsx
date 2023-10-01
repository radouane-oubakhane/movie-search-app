import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  children: string;
}
export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 800;
  const summary = expanded ? children : children.substring(0, limit) + "...";

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  return (
    <Text>
      {summary}
      {!expanded && (
        <Button
          size="xs"
          marginLeft={1}
          colorScheme="none"
          color={expanded ? "gray.500" : "blue.500"}
          fontWeight="bold"
          onClick={() => setExpanded(!expanded)}
          rightIcon={<ChevronRightIcon w={6} h={6} />}
        >
          {expanded ? "Read Less" : "Read More"}
        </Button>
      )}
    </Text>
  );
};
