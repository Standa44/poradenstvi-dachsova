import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const NavLink = ({ path, children }) => {    
    const router = useRouter()
    const isActive = router.asPath === path

    return (
        <Link href={path} mx={2}>
            <Text
                position="relative"
                fontWeight="medium"
                color={isActive ? "black.600" : "gray.600"}
                _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "0",
                    width: isActive ? "100%" : "0",
                    height: "2px",
                    bg: "gray.600",
                    transition: "width 0.3s",
                }}
                _hover={{ color: "gray.600", _after: { width: "100%" } }}
            >
                {children}
            </Text>
        </Link>
    )
}

export default NavLink