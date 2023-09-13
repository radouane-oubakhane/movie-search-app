import { Text, Image, Skeleton, VStack, StackDivider, HStack, Badge } from "@chakra-ui/react";
import { Company } from "../hooks/useSearchCompanies";
import getImageUrl from "../services/image-url";


interface Props {
  companies: Company[];
  isLoading: boolean;
  error: string | null;
}


const CompanyInfoList = ({ companies, isLoading, error }: Props) => {
  const skeletons = Array(12).fill(0);


  if (error) return <Text fontSize='2xl' textAlign='center'>{error}</Text>;


  return (
    <>
      <VStack
        spacing={4}
        align='stretch'
      >
        {
          isLoading && skeletons.map((_, index) => (
            <Text boxShadow="md" padding={4} key={index}>
              <Skeleton height='10px' />
            </Text>
          ))
        }
      </VStack>
    

      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        {
          companies.map((company) => (
            <HStack spacing='24px' key={company.id}>
              {!company.logo_path && <Text>{company.name}</Text>}
              {company.logo_path &&
                <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '60px' }}
                src={getImageUrl(company.logo_path, 'w300')} 
                alt={`${company.name} logo`}
              />}
              <Badge size="lg">{company.origin_country}</Badge>
            </HStack>))
        }
      </VStack>
    </>
  )
}

export default CompanyInfoList