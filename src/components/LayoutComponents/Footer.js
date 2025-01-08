import { Box, Flex, Text, Icon, Link, VStack } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={6} px={4}>
      <Flex justify="space-between" flexDir={{ base: "column", md: "row" }} align="center">
        {/* Logo a copyright */}
        <VStack align="start">
          <Text fontSize="lg" fontWeight="bold">LK DANĚ, s.r.o.</Text>
          <Text fontSize="sm">© 2025 LK DANĚ, s.r.o. Všechna práva vyhrazena.</Text>
        </VStack>

        {/* Rychlé odkazy */}
        <VStack align="start" spacing={1} mt={{ base: 4, md: 0 }}>
          <Link href="#sluzby" fontSize="sm">Služby</Link>
          <Link href="#o-me" fontSize="sm">O nás</Link>
          <Link href="#kontakt" fontSize="sm">Kontakt</Link>
        </VStack>

        {/* Sociální sítě */}
        <Flex mt={{ base: 4, md: 0 }}>
          <Link href="https://facebook.com" isExternal mx={2}>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://linkedin.com" isExternal mx={2}>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
          <Link href="https://twitter.com" isExternal mx={2}>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
