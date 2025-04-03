import { Box, Flex, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <Box bg="gray.800" color="white" py={6} px={4}>
      <Flex justify="space-between" flexDir={{ base: "column", md: "row" }} align="center">
        <VStack align="start">
          <Text fontSize="lg" fontWeight="bold">Ing. Jana Dachsová</Text>
          <Text fontSize="sm">© {getCurrentYear()} Všechna práva vyhrazena.</Text>
        </VStack>

        <VStack align="start" spacing={1} mt={{ base: 4, md: 0 }}>
          <Link href="#sluzby" fontSize="sm">Služby</Link>
          <Link href="#o-me" fontSize="sm">O nás</Link>
          <Link href="#kontakt" fontSize="sm">Kontakt</Link>
        </VStack>
        {/*Sjendotit naming, cz -> en 
          pridat prettier*/}
      </Flex>
    </Box>
  );
};

export default Footer;
