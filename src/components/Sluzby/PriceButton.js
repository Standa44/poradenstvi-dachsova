import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const PriceButton = () => {
    return (
        <Flex w="100%" justifyContent="flex-end">
            <Button as="a" href="/cenik" colorScheme="blue" variant="solid" size="lg" mt={4}>
                Ceník služeb
            </Button>
        </Flex>
    )
}

export default PriceButton