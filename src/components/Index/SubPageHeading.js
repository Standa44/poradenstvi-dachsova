import { Heading } from '@chakra-ui/react'
import React from 'react'

const SubPageHeading = ({ id, children }) => {
    return (
        <Heading size="lg" mb={4} id={id} textAlign="center">
            {children}
        </Heading>
    )
}

export default SubPageHeading