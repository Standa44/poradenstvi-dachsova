import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, VStack } from '@chakra-ui/react'
import React from 'react'
import { navLinks } from './Header'
import Link from 'next/link'

const MobileDrawerMenu = ({ isOpen, onClose }) => {
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                    <VStack as="nav" spacing={4} mt={10}>
                        {navLinks.map(({ path, text }, index) => (<Link href={path} onClick={onClose} fontSize="lg" key={index}>{text}</Link>))}
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default MobileDrawerMenu