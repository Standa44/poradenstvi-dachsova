import React from 'react'
import HeaderComponent from './HeaderComponent'
import { Image } from '@chakra-ui/react'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <HeaderComponent />
            <Image
                    src="/images/background.webp" 
                    alt="Background image" 
                    w="100%"
                    h="50vh"
                    objectFit='cover' 
                  />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Layout