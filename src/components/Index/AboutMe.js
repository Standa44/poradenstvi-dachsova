import { Flex, Image, Text, Heading } from "@chakra-ui/react";

const AboutMe = () => {
    return (
        <Flex w="80%"  mx="auto" py={10} px={6} align="center" justify="space-between" flexWrap="wrap" justifyContent="center">
            <Flex mx="auto">
                <Image
                    src="/images/profile-foto.png"
                    alt="Ing. Jana Dachsová"
                    maxW="180px"
                    objectFit="cover"
                />
            </Flex>
            <Flex maxW="600px" ml={{ base: 0, md: 10 }} mt={{ base: 6, md: 0 }} flexDir="column">
                <Heading as="h2" size="lg" mb={4} textAlign="center">Ing. Jana Dachsová</Heading>
                <Text fontSize="lg">
                    Jsem daňová poradkyně s více než 10 lety zkušeností v oblasti účetnictví a daní. Pomáhám podnikatelům a firmám
                    s vedením účetnictví, daňovým poradenstvím a optimalizací daňových povinností.
                </Text>
            </Flex>
        </Flex>
    );
};

export default AboutMe;
