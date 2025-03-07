import React from 'react'
import { Box, Heading } from '@chakra-ui/react';
import { danovaEvidence } from "@/components/Sluzby/danovaEvidence";
import { ucetnictvi } from '@/components/Sluzby/ucetnictvi';
import { mzdovaAgenda } from '@/components/Sluzby/mzdovaAgenda';
import ServiceSection from '@/components/Sluzby/ServiceSection';
import { danovePoradenstvi } from '@/components/Sluzby/danovePoradenstvi';
import PriceButton from '@/components/Sluzby/PriceButton';

const sluzby = () => {
  return (
    <Box maxW="800px" mx="auto" p={6}>
        <Heading size="lg" textAlign="center" mb={4}>Nabízené služby</Heading>
        <ServiceSection heading="DAŇOVÁ EVIDENCE" text={danovaEvidence} id="danova-evidence"/>
        <ServiceSection heading="ÚČETNICTVÍ" text={ucetnictvi} id="ucetnictvi"/>
        <ServiceSection heading="MZDOVÁ AGENDA" text={mzdovaAgenda} id="mzdova-agenda"/>
        <ServiceSection heading="DAŇOVÉ PORADENSTVÍ" text={danovePoradenstvi} id="danove-poradenstvi"/>
        <ServiceSection heading="Roční závěrky" id="rocni-zaverky"/>
        <PriceButton />
    </Box>
    )
}

export default sluzby