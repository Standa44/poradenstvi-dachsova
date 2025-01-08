import DanovaKomoraPoradcu from "@/components/Index/DanovaKomoraPoradcu";
import NabidkaSluzebIkony from "@/components/Index/NabidkaSluzebIkony";
import ServicesHeading from "@/components/Index/ServicesHeading";
import ServiceCard from "@/components/Index/ServiceCard";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ServicesList from "@/components/Index/ServicesList";
import ContactForm from "@/components/Index/ContactForm";
import ContactInfo from "@/components/Index/ContactInfo";


export default function Home() {

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
      <DanovaKomoraPoradcu />
      <Box w="80%" m="auto" borderTop="2px solid #4299e1"></Box>
      <NabidkaSluzebIkony />
      <Flex w="100%" bgColor="blue.400" textAlign="center" flexDir="column">
        <ServicesHeading />
        <Flex justify="space-between" p={4} flexDir={{ base: "column", md: "row" }} align={{ base: "center", md: "stretch" }}>
          <ServiceCard heading="Zastupování firem" text="Zajišťuji kontakt s finančním úřadem, přípravu odvolání a námitek, zastoupení při kontrolách a dalších jednáních a zdaňování neziskových organizací"  />
          <ServiceCard heading="Daňové poradenství" text="Poskytuji daňové a účetní poradenství, supervize, vedení účetnictví včetně návaznosti na právní vztahy v oblasti obchodního a občanského práva"/> 
        </Flex>
      </Flex>
     <ServicesList data={servicesData}/>
     
     <ContactInfo />
     <Box id="contact" bg="blue.400" py={10}>
      <Box textAlign="center" mb={6}>
        <Heading size="lg" color="white">
          Kontaktujte nás
        </Heading>
        <Text color="white" fontSize="sm">
          Máte otázky? Napište nám pomocí formuláře níže.
        </Text>
      </Box>
      <ContactForm />
    </Box>

      

    </>
  );
}
