import SubPageHeading from '@/components/Index/SubPageHeading'
import ContactForm from '@/components/Kontakt/ContactForm'
import ContactInfoSection from '@/components/Kontakt/ContactInfoSection'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Box p={6}>
        <SubPageHeading id="kontakt">Kontaktní informace</SubPageHeading>
        <ContactInfoSection />
      </Box>
      <ContactForm />
    </>
  )
}

export default Contact