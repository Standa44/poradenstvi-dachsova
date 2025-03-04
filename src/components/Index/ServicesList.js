import React from "react";
import {Flex, Box, Heading, List, ListItem, ListIcon, useBreakpointValue } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ServiceBox = ({ title, services }) => (
  <Flex
    borderRadius="3xl"
    boxShadow="xl"
    flex="1"
    w={{ base: "90%", md: "45%" }}
    m="20px"
    p="20px"
    border="2px solid #ededed"
    bg="gray.50"
    flexDir="column"
    
    //transition="all 0.2s"
    //_hover={{ transform: "scale(1.01)", boxShadow: "xl" }}
  >
    <Box>
      <Heading
        size="md"
        mb={4}
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
      >
        {title}
      </Heading>
      <List spacing={2}>
        {services.map((service, index) => (
          <ListItem key={index}>
            <ListIcon as={CheckCircleIcon} color="blue.500" />
            {service}
          </ListItem>
        ))}
      </List>
    </Box>
  </Flex>
);

const ServicesList = ({ data }) => {
    
  return (
    <Flex
      justifyContent="space-around"
      flexWrap="wrap"
      align="center"
      p={4} flexDir={["column", "column", "row", "row"]}
      bgColor="blue.400"
    >
      {data.map((item, index) => (
        <ServiceBox key={index} title={item.title} services={item.services} />
      ))}
    </Flex>
  );
};

export default ServicesList;
