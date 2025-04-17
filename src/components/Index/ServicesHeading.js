import { Heading } from '@chakra-ui/react'
import React from 'react'

const ServicesHeading = ({ id, children }) => {
    return (
        <Heading size="md" mb={3} textTransform="uppercase" id={id}>
            {children}
        </Heading>
    )
}

export default ServicesHeading