import React from 'react'
import { Box, Stack } from '@chakra-ui/react';
import { danovaEvidence } from "@/components/Sluzby/danovaEvidence";
import { ucetnictvi } from '@/components/Sluzby/ucetnictvi';
import { mzdovaAgenda } from '@/components/Sluzby/mzdovaAgenda';
import ServiceBox from '@/components/Sluzby/ServiceBox';
import { danovePoradenstvi } from '@/components/Sluzby/danovePoradenstvi';
import SubPageHeading from '@/components/CommonLib/SubPageHeading';
import RedirectButton from '@/components/CommonLib/RedirectButton';

const sluzby = () => {
  return (
    <Box maxW="800px" mx="auto" p={6}>
      <SubPageHeading id="sluzby">Nabízené služby</SubPageHeading>
      <Stack spacing={4} my={6}>
        <ServiceBox heading="DAŇOVÁ EVIDENCE" text={danovaEvidence} id="danova-evidence" />
        <ServiceBox heading="ÚČETNICTVÍ" text={ucetnictvi} id="ucetnictvi" />
        <ServiceBox heading="MZDOVÁ AGENDA" text={mzdovaAgenda} id="mzdova-agenda" />
        <ServiceBox heading="DAŇOVÉ PORADENSTVÍ" text={danovePoradenstvi} id="danove-poradenstvi" />
        <ServiceBox heading="Roční závěrky" id="rocni-zaverky" />
      </Stack>
      <RedirectButton href="/cenik">Ceník služeb</RedirectButton>
    </Box>
  )
}

export default sluzby