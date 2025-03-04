import React from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { danovaEvidence } from "@/components/Sluzby/danovaEvidence";
import { ucetnictvi } from '@/components/Sluzby/ucetnictvi';
import { mzdovaAgenda } from '@/components/Sluzby/mzdovaAgenda';
import ServiceSection from '@/components/Sluzby/ServiceSection';
import { danovePoradenstvi } from '@/components/Sluzby/danovePoradenstvi';

const sluzby = () => {
  return (
    <Box maxW="800px" mx="auto" p={6}>
        <Heading size="lg" textAlign="center" mb={4}>Nabízené služby</Heading>
        <ServiceSection heading="DAŇOVÁ EVIDENCE" text={danovaEvidence} id="danova-evidence"/>
        <ServiceSection heading="ÚČETNICTVÍ" text={ucetnictvi} id="ucetnictvi"/>
        <ServiceSection heading="MZDOVÁ AGENDA" text={mzdovaAgenda} id="mzdova-agenda"/>
        <ServiceSection heading="DAŇOVÉ PORADENSTVÍ" text={danovePoradenstvi} id="danove-poradenstvi"/>
        <ServiceSection heading="Roční závěrky" id="rocni-zaverky"/>

        <Flex w="100%" justifyContent="flex-end">
            <Button as="a" href="/cenik" colorScheme="blue" variant="solid" size="lg" mt={4}>
                Ceník služeb
            </Button>
            </Flex>
    </Box>
    )
}

export default sluzby