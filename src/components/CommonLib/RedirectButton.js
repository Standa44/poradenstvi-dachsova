import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const RedirectButton = ({ href, children }) => {
    return (
        <Flex w="100%" justifyContent="flex-end">
            <Button as="a" href={href} colorScheme="blue" variant="solid" size="lg">
                {children}
            </Button>
        </Flex>
    )
}

export default RedirectButton