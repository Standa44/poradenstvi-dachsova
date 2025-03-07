import { Flex, Icon, Link } from '@chakra-ui/react'
import React from 'react'

const SocialLinks = ({ links }) => {

    return (
        <Flex mt={{ base: 4, md: 0 }}>
            {links.map((link, index) => (
                <Link key={index} href={link.url} isExternal mx={2}>
                    <Icon as={link.icon} boxSize={6} />
                </Link>
            ))}
        </Flex>
    )
}

export default SocialLinks