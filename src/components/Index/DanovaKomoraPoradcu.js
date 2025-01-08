import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const DanovaKomoraPoradcu = () => {
  return (
    <Flex align="center" justify="space-between" wrap="wrap" p={8} flexDir={["column", "column", "row", "row"]}>
        <Box flex="1" textAlign="center">
            <Image src="images/komora-danovych-poradcu-logo.png" w={{ base: "40%", md: "30%" }} mx="auto" />
        </Box>
        <Box flex="2" p={4} >
            <Heading size="lg" mb={4} textAlign={{ base: "center", md: "left" }} >
                Nabízím kompletní služby daňového poradenství
            </Heading>
            <Text color="gray.600" fontSize="md" textAlign={{ base: "center", md: "left" }}>
                Společnost LK DANĚ, s. r. o. poskytuje kromě vedení účetnictví a daňové 
                evidence také služby daňového poradce, tj. zpracování daňových přiznání, 
                daňové poradenství, zastoupení před správcem daně a další související činnosti.
            </Text>
        </Box>
    </Flex>
  )
}

export default DanovaKomoraPoradcu