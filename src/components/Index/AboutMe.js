import { Flex, Image, Text } from "@chakra-ui/react";
import SubPageHeading from "../CommonLib/SubPageHeading";

const AboutMe = () => {
    return (
        <Flex w="80%" mx="auto" py={10} px={6} align="center" justify="space-between" flexWrap="wrap" justifyContent="center">
            <Flex mx="auto">
                <Image
                    src="/images/profile-foto.png"
                    alt="Ing. Jana Dachsová"
                    maxW="180px"
                    objectFit="cover"
                />
            </Flex>
            <Flex maxW="600px" ml={{ base: 0, md: 10 }} mt={{ base: 6, md: 0 }} flexDir="column">
                <SubPageHeading>Ing. Jana Dachsová</SubPageHeading>
                <Text fontSize="md">
                    Jsem daňová poradkyně s více než 10 lety zkušeností v oblasti účetnictví a daní. Pomáhám podnikatelům a firmám
                    s vedením účetnictví, daňovým poradenstvím a optimalizací daňových povinností.
                </Text>
            </Flex>
        </Flex>
    );
};

export default AboutMe;
