import { Flex, Image, Text, Heading } from "@chakra-ui/react";

const AboutMe = () => {
    return (
        <Flex w="100%" maxW="1200px" mx="auto" py={10} px={6} align="center" justify="space-between" flexWrap="wrap" justifyContent="center">
            <Flex mx="auto">
                <Image
                    src="https://dummyimage.com/250x250"
                    alt="Ing. Jana Dachsová"
                    boxSize="250px"
                    borderRadius="full"
                    objectFit="cover"
                    m="10px"
                />
            </Flex>
            <Flex maxW="600px" ml={{ base: 0, md: 10 }} mt={{ base: 6, md: 0 }} flexDir="column">
                <Heading as="h2" size="xl" mb={4}>Ing. Jana Dachsová</Heading>
                <Text fontSize="lg">
                    Jsem daňová poradkyně s více než 10 lety zkušeností v oblasti účetnictví a daní. Pomáhám podnikatelům a firmám
                    s vedením účetnictví, daňovým poradenstvím a optimalizací daňových povinností.
                </Text>
            </Flex>
        </Flex>
    );
};

export default AboutMe;
