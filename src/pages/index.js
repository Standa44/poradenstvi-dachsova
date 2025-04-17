import AboutMe from "@/components/Index/AboutMe";
import ReferenceSection from "@/components/Index/ReferenceSection";
import ServiceOverview from "@/components/Index/ServiceOverview";
import { Box } from "@chakra-ui/react";


export default function Home() {
  //pridat prettier

  return (
    <>
      <AboutMe />
      <Box w="80%" m="auto" borderTop="2px solid #4299e1"></Box>
      <ServiceOverview />
      <Box w="80%" m="auto" borderTop="2px solid #4299e1"></Box>
      <ReferenceSection />
    </>
  );
}
