import ContactForm from '@/components/Index/ContactForm'
import ContactInfo from '@/components/Index/ContactInfo'
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <>
    <ContactInfo />
    <Box id="contact" bg="blue.400" py={10}>
      <Box textAlign="center" mb={6}>
        <Heading size="lg" color="white">
          Kontaktujte nás
        </Heading>
        <Text color="white" fontSize="sm">
          Máte otázky? Napište nám pomocí formuláře níže.
        </Text>
      </Box>
      <ContactForm />
    </Box>
    </>
  )
}

export default Contact