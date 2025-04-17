import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaGlobe, FaClock } from "react-icons/fa";
import ContactInfoItem from "./ContactInfoItem";

const ContactInfoSection = () => {

  return (
    <>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems="center"
        gap={6}
        mx="auto"
        maxW="1200px"
      >
        {/* First column */}
        <Box flex="1" >
          <VStack spacing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Ing. Jana Dachsová
            </Text>
            <Text>Adresa firmy</Text>
            <Text>IČO: 12345678</Text>
          </VStack>
        </Box>

        {/* Second column */}
        <Box flex="1" textAlign="center">
          <VStack spacing={3} >
            <ContactInfoItem icon={FaPhone}>+420 723 298 431</ContactInfoItem>
            <ContactInfoItem icon={FaEnvelope}>dachsova.jana@seznam.cz</ContactInfoItem>
            <ContactInfoItem icon={FaGlobe}>www.firma.cz</ContactInfoItem>
            <ContactInfoItem icon={FaClock}>Po-Pá: 8:00-16:00</ContactInfoItem>
          </VStack>
        </Box>

        {/* Third column */}
        <Box flex="1" textAlign="center">
          <Box w="100%" h="200px" bg="gray.100" borderRadius="md" overflow="hidden" mx="auto">
            <iframe
              src="https://en.frame.mapy.cz/s/damanoduha"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa" 
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
};


export default ContactInfoSection;
