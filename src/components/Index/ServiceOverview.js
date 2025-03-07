import React from 'react'
import { FaBalanceScale, FaFileInvoiceDollar, FaUsers, FaCalendarCheck, FaFileAlt } from "react-icons/fa";
import NextLink from "next/link";
import { Flex, Text, Icon, LinkBox } from "@chakra-ui/react";

const ServiceOverview = () => {

    const serviceList = [
        { label: "Daňové poradenství", link: "/sluzby#danova-evidence", icon: FaBalanceScale },
        { label: "Vedení účetnictví", link: "/sluzby#ucetnictvi", icon: FaFileInvoiceDollar },
        { label: "Mzdová agenda", link: "/sluzby#mzdova-agenda", icon: FaUsers },
        { label: "Roční závěrky", link: "/sluzby#rocni-zaverky", icon: FaCalendarCheck },
        { label: "Daňová přiznání", link: "/sluzby#danove-poradenstvi", icon: FaFileAlt },
    ]

    return (
        <Flex w="100%" maxW="1200px" mx="auto" py={10} px={6} flexWrap="wrap" justify="center">
            {serviceList.map((service, index) => (
                <LinkBox
                    key={index}
                    as={NextLink}
                    href={service.link}
                    p={6}
                    m={3}
                    w="250px"
                    textAlign="center"
                    borderWidth="1px"
                    borderRadius="md"
                    _hover={{ shadow: "md", bg: "gray.100" }}
                >
                    <Icon as={service.icon} boxSize={10} color="blue.500" mb={3} />
                    <Text fontSize="lg" fontWeight="bold">{service.label}</Text>
                </LinkBox>
            ))}
        </Flex>
    )
}

export default ServiceOverview