import { Box, Flex, Heading, Text, Icon, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaGlobe, FaClock } from "react-icons/fa";

const ContactInfo = () => {
    return (
      <Box bg="white" py={10} px={4} id="kontakt">
        <Heading size="lg" textAlign="center" mb={8}>
          Kontaktní informace
        </Heading>
        <Flex 
          flexDir={{ base: "column", md: "row" }} 
          justifyContent="center"
          alignItems="center"
          gap={6} 
          mx="auto" 
          maxW="1200px"
        >
          {/* První sloupec */}
          <Box flex="1" textAlign="center">
            <VStack align="center" spacing={3}>
              <Text fontWeight="bold" fontSize="lg">
                Ing. Jana Dachsová
              </Text>
              <Text>Adresa firmy</Text>
              <Text>IČO: 12345678</Text>
            </VStack>
          </Box>
  
          {/* Druhý sloupec */}
          <Box flex="1" textAlign="center">
            <VStack align="center" spacing={3}>
              <Flex align="center" justify="center">
                <Icon as={FaPhone} boxSize={4} mr={2} color="blue.500" />
                <Text>+420 723 298 431</Text>
              </Flex>
              <Flex align="center" justify="center">
                <Icon as={FaEnvelope} boxSize={4} mr={2} color="blue.500" />
                <Text>dachsova.jana@seznam.cz</Text>
              </Flex>
              <Flex align="center" justify="center">
                <Icon as={FaGlobe} boxSize={4} mr={2} color="blue.500" />
                <Text>www.firma.cz</Text>
              </Flex>
              <Flex align="center" justify="center">
                <Icon as={FaClock} boxSize={4} mr={2} color="blue.500" />
                <Text>Po-Pá: 8:00-16:00</Text>
              </Flex>
            </VStack>
          </Box>
  
          {/* Třetí sloupec */}
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
              ></iframe>
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  };
  

export default ContactInfo;
