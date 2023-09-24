import { Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";

interface Props {
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
}

const DateRangeFilter = ({ setStartDate, setEndDate }: Props) => {
  return (
    <VStack>
      <SimpleGrid columns={2} justifyContent="space-between" spacingY={3}>
        <Text color="gray.400">from</Text>
        <Input
          onChange={(event) => setStartDate(event.target.value)}
          placeholder="Select Date and Time"
          size="sm"
          type="date"
        />
        <Text color="gray.400">to</Text>
        <Input
          onChange={(event) => setEndDate(event.target.value)}
          placeholder="Select Date and Time"
          size="sm"
          type="date"
        />
      </SimpleGrid>
    </VStack>
  );
};

export default DateRangeFilter;



