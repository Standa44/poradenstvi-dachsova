import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'

const ContactInfoItem = ({ icon, children }) => {
    return (
        <Flex align="center" justify="center">
            <Icon as={icon} boxSize={4} mr={2} color="blue.500" />
            <Text>{children}</Text>
        </Flex>
    )
}

export default ContactInfoItem