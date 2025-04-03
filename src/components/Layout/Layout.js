import React from 'react'
import HeaderComponent from './Header'
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <HeaderComponent />
            <Box position="relative" w="100%" h="50vh">
                <Image
                    src="/images/investice-sporeni.jpg"
                    alt="Background image"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="0 100%"
                />
                <Box display={["none", "none", "flex", "flex"]} position="absolute" left="10%"
                    top="50%" transform="translateY(-50%)" bg="rgba(0, 0, 0, 0.7)"
                    borderRadius="md" p={4} color="white" >
                    <Flex flexDir="column">
                        <Text fontSize="md" fontWeight="bold" w="300px">Daňové poradenství Dachsová,</Text>
                        <Text fontSize="md" w="300px">
                        komplexní služby fyzickým a právnickým osobám v oblasti vedení účetnictví (dříve podvojné účetnictví), daňové evidence (dříve jednoduché účetnictví), zpracování mezd a daňového poradenství pro podnikatele, malé a střední firmy.                        </Text>
                    </Flex>
                </Box>
            </Box>
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Layout