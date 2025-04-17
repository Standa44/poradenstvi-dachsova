import { Box, Flex, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <Box bg="gray.800" color="white" py={2}>
      <Flex justify="center" >
        <VStack>
          <Text fontSize="md" fontWeight="bold">Ing. Jana Dachsová</Text>
          <Text fontSize="xs">© {getCurrentYear()} Všechna práva vyhrazena.</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
