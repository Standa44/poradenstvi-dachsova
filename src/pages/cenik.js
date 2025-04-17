import { priceList } from "@/components/Cenik/priceList";
import PriceSection from "@/components/Cenik/PriceSection";
import SubPageHeading from "@/components/Index/SubPageHeading";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const Cenik = () => {

  return (
    <Box maxW="800px" mx="auto" p={6}>
      <SubPageHeading id="cenik">Ceník služeb</SubPageHeading>
      <Text mb={6}>Ceny jsou stanovené individuálně po dohodě s klientem podle množství dokladů, odvětví a náročnosti zpracování.</Text>
      <PriceSection priceList={priceList} />

      <Text mt={6} fontWeight="bold">Nabízím jistotu a spolehlivost za příznivou cenu. Těším se na spolupráci s Vámi.</Text>
      <Flex w="100%" justifyContent="flex-end">
        <Button as="a" href="/kontakt" colorScheme="blue" size="lg" mt={4}>
          Nechte si vypracovat cenový návrh
        </Button>
      </Flex>
    </Box>
  );
};

export default Cenik;
