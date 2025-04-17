import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const PriceBox = ({ priceList }) => {
    return (
      <Stack spacing={4} my={6}>
        {priceList.map((category, index) => (
          <Box key={index} p={4} shadow="md" borderRadius="lg" bg="gray.50" >
            <Heading size="md" mb={2}>{category.heading}</Heading>
            {category.items.map((item, idx) => (
              <Text key={idx}>🔹 {item.text} <b>{item.price}</b></Text>
            ))}
          </Box>
        ))}
      </Stack>
    );
  };

export default PriceBox