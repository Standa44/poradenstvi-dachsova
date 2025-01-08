import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ServiceCard = ({text, heading}) => {
    return (
        <Flex h="100%" align="center" justify="center" mx="auto" p={4} textAlign="center"
            w={{ base: "100%", md: "50%" }}
            flexDir={{ base: "column", md: "row" }} >
            <Image alt="Placeholder" maxW="150px" h="auto" src="https://dummyimage.com/250x250"
                objectFit="contain"
                mb={{ base: 4, md: 0 }}
                mr={{ base: 0, md: 4 }}
            />
            <Flex flexDir="column">
                <Heading size="md" color="white" mb={2} >
                    {heading}
                </Heading>
                <Text color="white" fontSize="md" wordBreak="break-word">{text}</Text>
            </Flex>
        </Flex>
    )
}

export default ServiceCard