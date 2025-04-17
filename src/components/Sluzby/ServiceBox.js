import { Box, Divider, Heading, List, ListItem } from '@chakra-ui/react'
import React from 'react'

const ServiceBox = ({ heading, text, id }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={5} boxShadow="md">
      <Heading size="md" mb={3} id={id}>{heading}</Heading>
      <Divider mb={3} />
      <List spacing={2} listStyleType="disc" pl={5}>
        {text?.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ServiceBox