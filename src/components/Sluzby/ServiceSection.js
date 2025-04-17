import { Box, Divider, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import ServicesHeading from '../Index/ServicesHeading'

const ServiceSection = ({ heading, text, id }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={5} mb={6} boxShadow="md">
      <ServicesHeading id={id}>{heading}</ServicesHeading>
      <Divider mb={3} />
      <List spacing={2} listStyleType="disc" pl={5}>
        {text?.map((polozka, index) => (
          <ListItem key={index}>{polozka}</ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ServiceSection