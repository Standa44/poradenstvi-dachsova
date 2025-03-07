import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ContactInfoName = ({data}) => {
    return (
        <Box flex="1" textAlign="center">
          <VStack align="center" spacing={3}>
            {data.heading && (
              <Text fontWeight="bold" fontSize="lg">
                {data.heading}
              </Text>
            )}
            {data.items.map((item, index) => (
              <Flex key={index} align="center" justify="center">
                {item.icon && <Icon as={item.icon} boxSize={4} mr={2} color="blue.500" />}
                <Text>{item.text}</Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      )
}

export default ContactInfoName