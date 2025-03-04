import ServiceCard from '@/components/Index/ServiceCard'
import ServicesHeading from '@/components/Index/ServicesHeading'
import ServicesList from '@/components/Index/ServicesList'
import { Flex } from '@chakra-ui/react'
import React from 'react'

const sluzby = () => {

  const servicesData = [
    {
      title: "Postarám se o Vaše účty a finance!",
      services: [
        "daňové poradenství",
        "účetní poradenství",
        "vedení účetnictví",
        "zpracování mzdové agendy",
        "zajištění auditu",
        "zastoupení před finančním úřadem",
        "daňová a účetní supervize",
        "odklad daňového přiznání na základě plné moci",
      ],
    },
    {
      title: "Komplexní služby daňového poradce!",
      services: [
        "zpracování daňových přiznání",
        "zastupování při kontrolách",
        "analýza daňových rizik",
        "optimalizace daňového zatížení",
        "poradenství při akvizicích",
        "mezinárodní daňové plánování",
      ],
    },
  ];

  return (
    <>
    <Flex w="100%" textAlign="center" flexDir="column">
        <ServicesHeading />
        <Flex justify="space-between" p={4} flexDir={{ base: "column", md: "row" }} align={{ base: "center", md: "stretch" }}>
          <ServiceCard heading="Zastupování firem" text="Zajišťuji kontakt s finančním úřadem, přípravu odvolání a námitek, zastoupení při kontrolách a dalších jednáních a zdaňování neziskových organizací"  />
          <ServiceCard heading="Daňové poradenství" text="Poskytuji daňové a účetní poradenství, supervize, vedení účetnictví včetně návaznosti na právní vztahy v oblasti obchodního a občanského práva"/> 
        </Flex>
      </Flex>
     <ServicesList data={servicesData}/>
    </>
  )
}

export default sluzby