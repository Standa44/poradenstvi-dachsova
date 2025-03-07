import { Box, Flex, Heading, Text, Icon, VStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaGlobe, FaClock } from "react-icons/fa";
import ContactInfoName from "../Kontakt/ContactInfoName";

const ContactInfo = () => {

  const nameData = [
    {
      heading: "Ing. Jana Dachsová",
      items: [
        { text: "Adresa firmy" },
        { text: "IČO: 12345678" }
      ]
    }
  ];
  
  const businessData = [
    {
      items: [
        { icon: FaPhone, text: "+420 723 298 431" },
        { icon: FaEnvelope, text: "dachsova.jana@seznam.cz" },
        { icon: FaGlobe, text: "www.firma.cz" },
        { icon: FaClock, text: "Po-Pá: 8:00-16:00" }
      ]
    }
  ];
  

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
          
          <ContactInfoName data={nameData[0]} />
          <ContactInfoName data={businessData[0]} />
  
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
