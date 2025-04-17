import { Flex, Icon, Text } from '@chakra-ui/react'
import { FaCheckCircle, FaQuestionCircle, FaRegHandshake, FaCalendarCheck, FaSearchDollar } from "react-icons/fa";

import React from 'react'

const services = [
  { icon: FaCheckCircle, label: "Posouzení" },
  { icon: FaQuestionCircle, label: "Nejasnosti" },
  { icon: FaRegHandshake, label: "Konzultace" },
  { icon: FaSearchDollar, label: "Náprava" },
  { icon: FaCalendarCheck, label: "Dokončení" },
];

const NabidkaSluzebIkony = () => {
  return (
    <Flex w="100%" wrap="wrap">
        {services.map((service, index) => (
        <Flex justify="space-between" m="auto" key={index} textAlign="center" p="25px" flexDir="column">
            <Flex>
            <Icon as={service.icon} m="20px"
                fontSize="60px" color="blue.200" 
                _hover={{ color: "blue.400" }}
            />
            </Flex>
            <Text fontSize="md" >{service.label}</Text>
        </Flex>
        ))}
    </Flex>
  )
}

export default NabidkaSluzebIkony